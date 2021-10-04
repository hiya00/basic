const db = {};

const addToDb = (item) => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    console.log(db);
};
const getDb = () => {
    return db;
};
const removeDb = (item) => {
    const db = getDb();
    delete db[item];
};