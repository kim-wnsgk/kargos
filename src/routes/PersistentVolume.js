import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/PersistentVolume.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrFormNext } from "react-icons/gr"

import jsonData from './data/persistentvolume.json'

function Services() {
    const getData = () => {
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };

        // fetch("/nodes/overview", requestOptions)
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
                <MenuBanner selected={["Controllers", "Deployments"]} />
            </div>
            <div className='contents-fixed'>
                <div className='topBanner-fixed'>
                    <TopBanner mainTitle="Persistent Volume Information" subTitle="Kubernetes Persistent Volume Information" />
                </div>
                <div className={styles.contents}>
                    <div className={styles.box}>
                        <div className={styles.name}>Name :</div>
                        <div className={styles.namespace}>Capacity:</div>
                        <div className={styles.access_modes}>access_modes {data.access_modes}</div>
                        <div className={styles.reclaim_policy}>reclaim_policy</div>
                        <div className={styles.status}>status</div>
                        <div className={styles.claim}>claim</div>
                        <div className={styles.storage_class}>storage_class</div>
                    </div>
                    {data ? data.map((pv) =>
                        <div>
                            <div className={styles.name}>Name : {pv.name}</div>
                            <div className={styles.namespace}>Capacity: {pv ? null : null}</div>
                            <div className={styles.access_modes}>access_modes: {pv.access_modes}</div>
                            <div className={styles.reclaim_policy}>reclaim_policy</div>
                            <div className={styles.status}>status</div>
                            <div className={styles.claim}>claim</div>
                            <div className={styles.storage_class}>storage_class</div>
                        </div>) : null}
                </div>
            </div>
        </div>
    );
}

export default Services;