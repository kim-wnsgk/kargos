import MenuBanner from '../display/MenuBanner.js'
import TopBanner from '../display/TopBanner.js'

import './css/Main.css'

function OverviewSummary() {
    return (
        <div class="container-fixed">
            <div className='menuBanner-fixed'>
                <MenuBanner selected={["OverView", 'Summary']} />
            </div>
            <div className='contents-fixed'>
                <div className='topBanner-fixed'>
                    <TopBanner mainTitle="Overview" subTitle="Kubernetes Cluster Overview" />
                </div>
            </div>
            main
        </div>
    );
}

export default OverviewSummary;