import { documentsCollection } from "./dbConnect.js";

export function addDocument(name) {
    return documentsCollection.insertOne({ name, text: '' })
}

export function findDocument(name) {
    return documentsCollection.findOne({ name });
}

export function updateDocument(name, text) {
    const update = documentsCollection.updateOne({
        name,
    }, {
        $set: {
            text
        }
    })
    return update;
}

export function getDocuments() {
    return documentsCollection.find().toArray();
}

export function removeDocument(name) {
    return documentsCollection.deleteOne({ name })
}
