import style from './assets/css/userProfile.module.css'
const UserProfile = () => {
    return (
        <div>
            <h1 className={style.heading}>style with css modules</h1>
            <div className={style.container}>
                <img className={style.img} src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg' alt='img' />
                <div className={style.cardContent}>
                    <h3>Preeti sharma</h3>
                    <h4>software Developer</h4>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
