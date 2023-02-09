import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/ServicesDetail.module.css'
import MyChart from '../display/MyChart.js'

import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import jsonData from './data/serviceDetail.json'

function NamespacesDetail() {

    const { name } = useParams();
    const { namespace } = useParams();
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

    const [data, setData] = useState(null);

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
                    <TopBanner mainTitle="Pod Information" subTitle="Kubernetes Pod Information" />
                </div>
                <div className={styles.contents}>
                    {data ? <div className={styles.box}>
                        <div className={styles.title}>Name: {name}</div>
                        <div className={styles.title}>Namespace: {namespace}</div>
                        <div className={styles.cluster_ip}>Cluster IP: {data.cluster_ip}</div>
                        <div className={styles.external_ip}>External IP: {data.external_ip}</div>
                        <div className={styles.port}>Port: {data.port}</div>
                        <div className={styles.node_port}>Node Port: {data.node_port}</div>
                        <div className={styles.created}>Created: {data.created}</div>
                    </div> : null}


                </div>
            </div>
            main
        </div>
    );
}

export default NamespacesDetail;