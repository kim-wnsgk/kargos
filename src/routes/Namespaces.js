import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Namespaces.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrFormNext } from "react-icons/gr"

import jsonData from './data/namespacesData.json'

function Namespaces() {
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
                    <TopBanner mainTitle="Namespaces Information" subTitle="Kubernetes Namspaces Information" />
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
                            <div className={styles.labels}>Labels</div>
                            <div className={styles.status}>Status</div>
                            <div className={styles.cpu}>CPU Usage</div>
                            <div className={styles.ram}>RAM Usage</div>
                        </div>
                        {data.map((ns) => {
                            console.log(ns.labels)
                            return <div className={styles.rows}>
                                <div className={styles.name}>{ns.name}</div>
                                <div className={styles.labels}>{ns.labels ? Object.keys(ns.labels) : ".."}</div>
                                {ns.status == "Active" ?
                                    <div className={styles.status} style={{ color: 'green' }}>{ns.status}</div> :
                                    <div className={styles.status} style={{ color: 'red' }}>{ns.status}</div>}

                                <div className={styles.cpu}>{ns.cpu_usage ? ns.cpu_usage : ".."}</div>
                                <div className={styles.ram}>{ns.ram_usage ? ns.ram_usage : ".."}</div>
                                <Link to={`/resources/namespaces/detail/${ns.name}`} className={styles.toDetail}><GrFormNext /></Link>

                            </div>
                        }
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Namespaces;