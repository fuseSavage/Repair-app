import React, { useState, useEffect} from 'react'



// import services
import { FetchGarageAll } from "../../services";




function Admin() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const getGarage = async () => {
          await FetchGarageAll().then(async (response) => {
            if (response.code === 500) {
              console.log("data", response);
            } else {
              await setDatas(response.data);
              //  console.log('data', response.data)
            }
            // console.log('data', response)
          });
        };
        getGarage();
      }, []);

    

      
  return (
    <>Admin</>
  )
}

export default Admin