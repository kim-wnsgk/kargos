import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'
import './css/Main.css'
import styles from './css/PodsDetail.module.css'
import MyChart from '../display/MyChart.js'

import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import jsonData from './data/podDetailData.json'

function PodsDetail() {
    const datas = {
        labels: ["CPU", "Max CPU"],
        datasets: [
            {
                type: 'line',
                label: 'CPU Usage',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [2, 4],
                borderColor: 'red',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        interaction: {
            mode: 'index',  	//툴팁 전체 출력
            intersect: false,
        },
        maxBarThickness: 100,    // bar 타입 막대의 최대 굵기
        layout: {
            padding: {
                bottom: 200
            }
        },
        plugins: {
            legend: {
                position: 'right',		//레전드 위치 
            },
            title: {
                display: true,		//타이틀 
                text: "CPU",
                fontSize: 25,
            },
            datalabels: {
                anchor: 'start',  //start , end 
                align: 'middle',   //top bottom middle 데이터 라벨 표시 위치
                formatter: function (value, context) {
                    //데이터 값이 0 이면 출력 안함
                    if (context.dataset.label !== '전체') {
                        if (value == 0) {
                            return null;
                        } else {
                            return value;
                        }
                    } else {
                        if (value == 0) {
                            return null;
                        } else {
                            let result = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                            return result;
                        }
                    }
                },
            },
            tooltip: {
                backgroundColor: 'rgba(124, 35, 35, 0.4)',
                padding: 10,
                bodySpacing: 5,     //툴팁 내부의 항목 간격
            }
        },
        maintainAspectRatio: true, //false :  상위 div에 구속
        responsive: true, //false : 정적 true: 동적
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                // beginAtZero: true
            },
        },
        onClick: function (evt, element) {
            // onClickNot working element null
            console.log(evt, element);	//클릭시 이벤트 추가 가능
        }
    };

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
                        <div className={styles.title}>{name}</div>
                        <div className={styles.chart}>
                            <MyChart data={datas} options={options} />
                        </div>
                        <div className={styles.details}>Node: {data.node}</div>
                        <div className={styles.details}>Namespace: {data.namespace}</div>
                        <div className={styles.pods}>
                            {data.containers ?
                                data.containers.map((container) =>
                                    <div>
                                        <div className={styles.title}>{container.name}</div>
                                        <div className={styles.subtitle}>Image: {container.image}</div>

                                        <div>
                                            <div className={styles.row}>
                                                <div className={styles.name}>Name</div>
                                                <div className={styles.status}>Status</div>
                                                <div className={styles.pid}>PID</div>
                                                <div className={styles.cpu}>CPU Usage</div>
                                                <div className={styles.ram}>RAM Usage</div>
                                            </div>
                                            {container.processes ?
                                                container.processes.map((ps) =>
                                                    <div className={styles.row}>
                                                        <div className={styles.name}>{ps.name}</div>
                                                        {ps.status == "running" ?
                                                            <div className={styles.status} style={{ color: 'green' }}>{ps.status}</div> :
                                                            <div className={styles.status} style={{ color: 'red' }}>{ps.status}</div>}

                                                        <div className={styles.pid}>{ps.pid}</div>
                                                        <div className={styles.cpu}>{ps.cpu_usage}mi</div>
                                                        <div className={styles.ram}>{ps.ram_usage}mb</div>
                                                    </div>)
                                                : null}
                                        </div>
                                    </div>)
                                : null}
                            {/* <div>
                                <div className={styles.row}>
                                    <div className={styles.name}>Name</div>
                                    <div className={styles.status}>Status</div>
                                    <div className={styles.image}>Image</div>
                                    <div className={styles.age}>Age</div>
                                </div>
                                {data.pods.map((pod, index) => {
                                    return <div className={styles.row}>
                                        <div className={styles.name}>{pod.name}</div>
                                        {pod.status == "Running" ?
                                            <div className={styles.status} style={{ color: 'green' }}>{pod.status}</div> :
                                            <div className={styles.status} style={{ color: 'red' }}>{pod.status}</div>}

                                        <div className={styles.image}>{pod.image}</div>
                                        <div className={styles.age}>{pod.age}</div>
                                    </div>
                                }
                                )}
                            </div> */}
                        </div>
                    </div> : null}


                </div>
            </div>
            main
        </div>
    );
}

export default PodsDetail;