import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as uuid } from "uuid";

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }
    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg','image/jpg', 'image/png'].includes(file.type)) {
        let photoId = uuid();
        let newFile = ref(storage, `images/${photoId}`);
        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);
        return { name: upload.ref.name, url: photourl } as Photo;
    }else {
        return new Error('Tipo de arquivo não permitido');
    }
}

export const deleteFile = async(url: string) => {
    let fileRef = ref(storage, `images/${url}`);
    let result = false;
    await deleteObject(fileRef)
    .then(() => result = true)
    .catch(()=> result = false);
    return result;
}