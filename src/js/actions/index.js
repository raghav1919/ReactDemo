export const ADD_ARTICLE = "ADD_ARTICLE";
export const SAVE_USER = 'SAVE_USER';

export function addArticle(payload) {
    return { type:ADD_ARTICLE, payload }
}

export function saveUser(payload) {
  return { type: SAVE_USER, payload}
}