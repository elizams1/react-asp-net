import React, { useEffect, useState } from 'react';
import axios from 'axios';

function KarywanPage(){
  const [karyawan, setKaryawan] = useState([]);
  useEffect(()=>{
    axios
      .get("https://localhost:7137/api/Karyawan")
      .then(function (thedata){
          // alert("hallo");
          // console.log(thedata.data.data);
          console.log("Masuk");
          setKaryawan(thedata.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])

  return(
    <>
      {karyawan.map(item=>
        <p>{item.namaBelakang}</p>
      )}
    </>
  );
}
export default KarywanPage;
