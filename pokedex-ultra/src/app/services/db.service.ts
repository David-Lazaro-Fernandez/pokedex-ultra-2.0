import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { User } from './user';
import { FavoritePkmn } from './favorite-pkmn';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private storage: SQLiteObject;
  favoritePkmnList = new BehaviorSubject([]);
  userList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'positronx_db.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchUsers(): Observable<User[]> {
    return this.userList.asObservable();
  }

  // Render fake data
  getFakeData() {
    this.httpClient
      .get('assets/seed.sql', { responseType: 'text' })
      .subscribe((data) => {
        this.sqlPorter
          .importSqlToDb(this.storage, data)
          .then((_) => {
            this.getUsers();
            this.isDbReady.next(true);
          })
          .catch((error) => console.error(error));
      });
  }

  // Get list
  getUsers() {
    return this.storage
      .executeSql('SELECT * FROM user', [])
      .then((res) => {
        let items: User[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              uid: res.rows.item(i).uid,
              photo_route: res.rows.item(i).photo_route,
            });
          }
        }
        this.userList.next(items);
      });
  }

  getFavoritePkmn(uid) {
    return this.storage
      .executeSql('SELECT * FROM favorite_pkmn WHERE user = ?', [uid])
      .then((res) => {
        let items: FavoritePkmn[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              pkmn_id: res.rows.item(i).pkmn_id,
              user: res.rows.item(i).user,
            });
          }
        }
        this.favoritePkmnList.next(items);
      });
  }

  // Add
  addUser(uid, photo_route) {
    let data = [uid, photo_route];
    return this.storage
      .executeSql(
        'INSERT INTO user (uid, photo_route) VALUES (?, ?)',
        data
      )
      .then((res) => {
        this.getUsers();
      });
  }

  addFavoritePkmn(pkmn_id, uid) {
    let data = [pkmn_id, uid];
    return this.storage
      .executeSql(
        'INSERT INTO user (pkmn_id, uid) VALUES (?, ?)',
        data
      )
      .then((res) => {
        this.getFavoritePkmn(uid);
      });
  }

  // Get single object
  getUser(uid): Promise<User> {
    return this.storage
      .executeSql('SELECT * FROM user WHERE uid = ?', [uid])
      .then((res) => {
        return {
          id: res.rows.item(0).id,
          uid: res.rows.item(0).uid,
          photo_route: res.rows.item(0).photo_route,
        };
      });
  }

  // Update
  updateUser(user: User) {
    let data = [user.photo_route];
    return this.storage
      .executeSql(
        `UPDATE user SET photo_route = ? WHERE uid = ${user.uid}`,
        data
      )
      .then((data) => {
        this.getUsers();
      });
  }

  // Delete
  deleteSong(id) {
    return this.storage
      .executeSql('DELETE FROM songtable WHERE id = ?', [id])
      .then((_) => {
        this.getUsers();
      });
  }
}
