import styles from './css/TopBanner.module.css'
import { IoIosNotifications } from "react-icons/io"

import { useState } from 'react';

function TopBanner(props) {
    const [text, setText] = useState('');
    const onText = (e) => {
        setText(e.target.value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.title}>
                    <div className={styles.mainTitle}>{props.mainTitle}</div>
                    <div className={styles.subTitle}>{props.subTitle}</div>
                </div>
                <div className={styles.icons}>
                    <input type="text" placeholder='Search' value={text} onChange={onText} />
                    <div className={styles.alert}>
                        <IoIosNotifications size="70" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBanner