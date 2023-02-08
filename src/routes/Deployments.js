import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/Deployments.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrFormNext } from "react-icons/gr"

import jsonData from './data/deploymentsData.json'

function Deployments() {
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
                        {data ? data.map((dep) => {
                            if (!namespaces.has(dep.namespace)) {
                                namespaces.add(dep.namespace);  // set에 없으면 넣고 return, 있다면 pass
                                return (
                                    <option key={dep.namespace} value={dep.namespace}>{dep.namespace}</option>
                                )
                            }
                        }) : null}
                    </select>
                    <div className={styles.box}>

                        <div className={styles.rows}>
                            <div className={styles.name}>Name</div>
                            <div className={styles.namespace}>Namespace</div>
                            <div className={styles.image}>Image</div>
                            <div className={styles.status}>Status</div>
                            <div className={styles.label}>Label</div>
                            <div className={styles.created}>Created</div>
                        </div>
                        {data.map((dep) => (
                            <div className={styles.rows}>
                                <div className={styles.name}>{dep.name}</div>
                                <div className={styles.namespace}>{dep.namespace}</div>
                                <div className={styles.image}>{dep.images}</div>
                                {dep.status == "running" ?
                                    <div className={styles.status} style={{ color: 'green' }}>{dep.status}</div> :
                                    <div className={styles.status} style={{ color: 'red' }}>{dep.status}</div>}

                                <div className={styles.label}>{dep.label}</div>
                                <div className={styles.created}>{dep.created}</div>
                                <Link to={`/controllers/deployments/detail/${dep.name}`} className={styles.toDetail}><GrFormNext /></Link>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Deployments;