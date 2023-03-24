import { useEffect, useState } from 'react'
import ImgView from './imgView'
import { db } from "../lib/firebase";

function App() {

  const [imgpath, setImgpath] = useState("https://firebasestorage.googleapis.com/v0/b/typlo-test.appspot.com/o/images%2FrY6BVktwFDsDJSAE?alt=media&token=0a232808-f25f-45df-a8ce-598ff19b9539")

  useEffect(() => {
    const getImg = db
      .collection("Img")
      .doc("img")
      .onSnapshot((snapshot) => {
      const data: any = snapshot.data();
      console.log(data.path);
      setImgpath(data.path);
  });
  return () => getImg();
}, []);

  return (
    <div>
      <ImgView path={imgpath}/>
    </div>
  )
}

export default App
