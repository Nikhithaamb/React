import React from 'react'
import style from "./findcoder.module.css"
const Explore = () => {
    return (
        <div id={style.explore}>
            <div id={style.content}>
            <h1>Here Are Some -</h1>
                <p>Projects By Developers</p>
            </div>
                <div id={style.image}>
                    <img src="https://www.findcoder.io/explore/startup-209.svg" alt="" />
                </div>
        </div>
    )
}

export default Explore