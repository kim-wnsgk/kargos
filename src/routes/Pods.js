import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Pods.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrFormNext } from "react-icons/gr"

import jsonData from './data/podsData.json'

function Pods() {
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
    let namespaces = new Set();

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
                    <TopBanner mainTitle="Deployments" subTitle="Kubernetes Deployments Overview" />
                </div>
                <div className={styles.contents}>
                    <select>
                        {data ? data.map((pod) => {
                            if (!namespaces.has(pod.namespace)) {
                                namespaces.add(pod.namespace);  // set에 없으면 넣고 return, 있다면 pass
                                return (
                                    <option key={pod.namespace} value={pod.namespace}>{pod.namespace}</option>
                                )
                            }
                        }) : null}
                    </select>
                    <div className={styles.box}>

                        <div className={styles.rows}>
                            <div className={styles.name}>Name</div>
                            <div className={styles.namespace}>Namespace</div>
                            <div className={styles.ip}>PodIP</div>
                            <div className={styles.status}>Status</div>
                            <div className={styles.conn}>Service Connected</div>
                            <div className={styles.restarts}>Restarts</div>
                        </div>
                        {data.map((pod) => (
                            <div className={styles.rows}>
                                <div className={styles.name}>{pod.name}</div>
                                <div className={styles.namespace}>{pod.namespace}</div>
                                <div className={styles.ip}>{pod.pod_ip}</div>
                                {pod.status == "running" ?
                                    <div className={styles.status} style={{ color: 'green' }}>{pod.status}</div> :
                                    <div className={styles.status} style={{ color: 'red' }}>{pod.status}</div>}

                                <div className={styles.conn}>{pod.service_connected}</div>
                                <div className={styles.restarts}>{pod.restarts}</div>
                                <Link to={`/resources/pods/detail/${pod.name}`} className={styles.toDetail}><GrFormNext /></Link>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pods;