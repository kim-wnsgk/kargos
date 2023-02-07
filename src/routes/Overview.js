import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'

import './css/Main.css'
import styles from './css/Overview.module.css'

import { AiOutlineProfile } from "react-icons/ai"

import { useEffect, useState } from 'react'

import jsonData from './data/mainData.json'

function Overview() {

    const getData = () => {
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };

        // fetch("/nodes/overview", requestOptions)
        //     .then(response => response.text())
        //     .then(result => setData(result))
        //     .catch(error => console.log('error', error));

        setData(jsonData);
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        getData();

    }, [data]);
    return (
        <div class="container-fixed">
            {/* <div class='button'>butsdton</div> */}
            <div className='menuBanner-fixed'>
                <MenuBanner selected={["OverView"]} />
            </div>
            <div className='contents-fixed'>
                <div className='topBanner-fixed'>
                    <TopBanner mainTitle="Overview" subTitle="Kubernetes Cluster Overview" />
                </div>
                {data ? <div className={styles.contents}>
                    <div className={styles.rows}>
                        <div className={`${styles.box} ${styles.totals}`}>
                            <div className={styles.total}>
                                <div className={styles.mainTitle}>Kubernetes version</div>
                                <div className={styles.subTitle}>{data.kubernetes_version}</div>
                            </div>
                            <div className={styles.total}>
                                <div className={styles.mainTitle}>Total Nodes</div>
                                <div className={styles.subTitle}>{data.total_nodes}</div>
                            </div>
                            <div className={styles.total}>
                                <div className={styles.mainTitle}>Created</div>
                                <div className={styles.subTitle}>{data.created}</div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.rows}>
                        <div className={styles.cols}>
                            <div className={`${styles.box} ${styles.block}`}>
                                <AiOutlineProfile className={styles.icon} />
                                <div className={styles.mainTitle}>Total Resources</div>
                                <div className={styles.subTitle}>{data.Tabs.TotalResources}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Namespaces</div>
                                <div className={styles.subTitle}>{data.Tabs.Namespaces}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Deployments</div>
                                <div className={styles.subTitle}>{data.Tabs.Deployments}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.cols}>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Pods</div>
                                <div className={styles.subTitle}>{data.Tabs.Pods}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Ingresses</div>
                                <div className={styles.subTitle}>{data.Tabs.Ingresses}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Services</div>
                                <div className={styles.subTitle}>{data.Tabs.Services}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.cols}>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Persistent Volume</div>
                                <div className={styles.subTitle}>{data.Tabs.PersistentVolume}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>Jobs</div>
                                <div className={styles.subTitle}>{data.Tabs.Jobs}</div>
                            </div>
                            <div className={`${styles.box} ${styles.block}`}>
                                <div className={styles.mainTitle}>DemonSets</div>
                                <div className={styles.subTitle}>{data.Tabs.DaemonSets}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.box}>
                            <div className={styles.mainTitle}>Top 5 NameSpaces</div>
                            <div className={styles.subTitle}>{data.top_namespaces ? data.top_namespaces : "null"}</div>
                        </div>
                    </div>
                </div> : null}
            </div>

        </div>
    );
}

export default Overview;