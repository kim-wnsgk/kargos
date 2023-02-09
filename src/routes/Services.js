import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Services.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrFormNext } from "react-icons/gr"

import jsonData from './data/service.json'

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
                    <TopBanner mainTitle="Services Information" subTitle="Kubernetes Services Information" />
                </div>
                <div className={styles.contents}>
                    <div className={styles.box}>

                        <div className={styles.rows}>
                            <div className={styles.name}>Name</div>
                            <div className={styles.namespace}>Namespace</div>
                            <div className={styles.type}>Type</div>
                            <div className={styles.clusterIp}>Cluster IP</div>
                            <div className={styles.externalIp}>External IP</div>
                            <div className={styles.port}>Port</div>
                            <div className={styles.nodePort}>Node Port</div>
                        </div>
                        {data.map((sv) => {
                            console.log(sv.labels)
                            return <div className={styles.rows}>
                                <div className={styles.name}>{sv.name}</div>
                                <div className={styles.namespace}>{sv.namespace}</div>
                                <div className={styles.type}>{sv.Type}</div>
                                <div className={styles.clusterIp}>{sv.cluster_ip}</div>
                                <div className={styles.externalIp}>{sv.external_ip}</div>
                                <div className={styles.port}>{sv.port}</div>
                                <div className={styles.nodePort}>{sv.node_port}</div>
                                <Link to={`/resources/services/detail/${sv.namespace}/${sv.name}`} className={styles.toDetail}><GrFormNext /></Link>
                            </div>
                        }
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;