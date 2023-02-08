import styles from './css/MenuBanner.module.css'
import { Link } from "react-router-dom"

function MenuBanner(props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.mainTitle}> <Link to="/" style={{ color: 'white', textDecoration: "none" }}>Kargos</Link></div>
                <div className={styles.subTitle}>Kubernetes Monitoring system</div>
            </div>
            {/* <label for="menuButton">open</label>
            <input type="checkbox" id="menuButton" className={styles.menuButton} /> */}
            <div className={styles.menuBar}>
                <ul className={styles.menuList}>
                    <li>
                        <div>
                            <Link to='/overview' className={styles.link}>Overview</Link>
                        </div>
                        <ul className={styles.smallMenu}>
                            <li><Link to="/overview/summary" className={styles.link}>Summary</Link></li>
                            <li>Custom view</li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <Link to='/alerts' className={styles.link}>Alerts</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to='/nodes' className={styles.link}>Nodes</Link>
                        </div>
                    </li>
                    <li>
                        <div>Controller</div>
                        <ul className={styles.smallMenu}>
                            <li><Link to='/controllers/deployments' className={styles.link}>Deployment</Link></li>
                            <li>Ingress</li>
                            <li>DemonSets</li>
                        </ul>
                    </li>
                    <li>
                        <div>Resources</div>
                        <ul className={styles.smallMenu}>
                            <li><Link to='/resources/pods' className={styles.link}>Pods</Link></li>
                            <li>Namespaces</li>
                            <li>Services</li>
                            <li>Persistent Volume</li>
                        </ul>
                    </li>

                    <li>Events</li>
                </ul>
                <div className={styles.help}>help</div>
            </div>
        </div>
    );
}

export default MenuBanner