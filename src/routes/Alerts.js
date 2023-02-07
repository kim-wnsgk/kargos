import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Alerts.module.css'

import { useEffect, useState } from 'react'

import jsonData from './data/alertsData.json'

function Alerts() {
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
                <MenuBanner selected={["Alerts"]} />
            </div>
            <div className='contents-fixed'>
                <div className='topBanner-fixed'>
                    <TopBanner mainTitle="Alerts" subTitle="Kubernetes alerts" />
                </div>
                <div className={styles.contents}>
                    <div className={styles.box}>
                        {data.map((alr) => (

                            alr.tag === "severe" ? (
                                <div className={styles.alertsSevere}>
                                    <div className={styles.tag}>[{alr.tag}]</div>
                                    <div className={styles.message}>{alr.message}</div>
                                    <div className={styles.X}>X</div>
                                </div>) : (
                                <div className={styles.alertsWarning}>
                                    <div className={styles.tag}>[{alr.tag}]</div>
                                    <div className={styles.message}>{alr.message}</div>
                                    <div className={styles.X}>X</div>
                                </div>)

                        ))}
                    </div>

                </div>
            </div>
            main
        </div>
    );
}

export default Alerts;