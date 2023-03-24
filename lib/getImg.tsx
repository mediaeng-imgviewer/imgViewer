import { useState, useEffect } from 'react';
import { db } from './firebase';

export const GetImg = () => {
    const [imgpath, setImgpath] = useState("https://firebasestorage.googleapis.com/v0/b/typlo-test.appspot.com/o/images%2FrY6BVktwFDsDJSAE?alt=media&token=0a232808-f25f-45df-a8ce-598ff19b9539")

    useEffect(() => {
        const getImg = db
        .collection("Img")
        .doc("img")
        .onSnapshot((snapshot: any) => {
            const data: any = snapshot.data()
            console.log(data)
            setImgpath(data.path)
  })}, []);
}