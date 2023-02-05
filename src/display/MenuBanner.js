import styles from './css/MenuBanner.module.css'

function MenuBanner() {
    return (  
        <div>
            <div className={styles.container}>
                menu
                
            </div>
            <label for="menuButton">open</label>
            <input type="checkbox" id="menuButton" className={styles.menuButton} />
        </div>
    );
}

export default MenuBanner