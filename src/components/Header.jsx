import './Header.css'
import cropvoiceLogo from '../assets/logo-2.png'

export const Header = () => {

    return (
        <div className='app-header'>
            <div className='app-header_left'>
                <a
                    href='https://innerplant.com/cropvoice/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='app-header_hero'>
                        <span className='app-header_logo'>
                            <img src={cropvoiceLogo} alt="CropVoice logo" />
                            {/* <span className='app-header_logo_emoji'>🌱</span> */}
                        </span>
                        <span className='app-header_name'>
                            <span>
                                <span className='app-header_name_crop'>CROP</span>
                                <span className='app-header_name_voice'>VOICE</span>
                            </span>
                            <span className='app-header_name_TM'>TM</span>
                        </span>
                    </div>
                    {/* <div className='app-header_tagline'>
                        Disease Alert & Crop Health Monitoring
                    </div> */}
                </a>
            </div>
            <div className='app-header_navBar'>
                <button>DASHBOARD</button>
                <button>REPORTS</button>
                <button>SETTINGS</button>
            </div>
        </div>
    )
}