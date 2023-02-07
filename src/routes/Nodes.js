import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Nodes.module.css'

import { useEffect, useState } from 'react'

import jsonData from './data/nodeData.json'

function Nodes() {
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
                    <TopBanner mainTitle="Nodes" subTitle="Kubernetes Nodes Overview" />
                </div>
                <div className={styles.contents}>
                    <div className={styles.box}>
                        <div className={styles.rows}>
                            <div className={styles.name}>Name</div>
                            <div className={styles.cpu}>CPU Usage</div>
                            <div className={styles.ram}>RAM Usage</div>
                            <div className={styles.disk}>Disk Usage</div>
                            <div className={styles.ip}>IP</div>
                        </div>
                        {data.map((node) => (
                            <div className={styles.rows}>
                                <div className={styles.name}>{node.name}</div>
                                <div className={styles.cpu}>{node.cpu_usage}</div>
                                <div className={styles.ram}>{node.ram_usage}</div>
                                <div className={styles.disk}>{node.disk_usage}</div>
                                <div className={styles.ip}>{node.ip}</div>
                                >
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            main
        </div>
    );
}

export default Nodes;