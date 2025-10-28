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
                    <div>
                        <span className='app-header_logo'>
                            {/* <img src={cropvoiceLogo} alt="CropVoice logo" /> */}
                            <span className='app-header_logo_emoji'>🌱</span>
                        </span>
                        <span className='app-header_name'>
                            <span className='app-header_name_crop'>Crop</span>
                            <span className='app-header_name_voice'>Voice</span>
                        </span>
                    </div>
                    <div className='app-header_tagline'>
                        Disease Alert & Crop Health Monitoring
                    </div>
                </a>
            </div>
        </div>
    )
}