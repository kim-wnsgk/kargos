import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Deployments.module.css'

import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import jsonData from './data/deploymentsData.json'

function DeploymentsDetail() {
    const { name } = useParams();
    const getData = () => {
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };

        // fetch("/controllers/deployments/overview", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log("data is : ", result))
        //     .catch(error => console.log('error', error));

        setData(jsonData);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [data]);

    return (
        <div class="container-fixed">
            <div className='menuBanner-fixed'>
                <MenuBanner selected={["Controllers", "Deployments", "Detail"]} />
            </div>
            <div className='contents-fixed'>
                <div className='topBanner-fixed'>
                    <TopBanner mainTitle="Deployment Information" subTitle="Kubernetes Deployments Information" />
                </div>
                <div className={styles.contents}>
                    <div className={styles.box}>
                        {name}
                    </div>

                </div>
            </div>
            main
        </div>
    );
}

export default DeploymentsDetail;