import {Attempt} from './types';
const KEY='lld-attempts-v1';
export function loadAttempts():Attempt[]{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
export function saveAttempt(a:Attempt){const xs=loadAttempts().filter(x=>x.id!==a.id);localStorage.setItem(KEY,JSON.stringify([a,...xs]));}
export function clearAttempts(){localStorage.removeItem(KEY)}
