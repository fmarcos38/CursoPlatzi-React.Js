import React from 'react'
import './loading.css'

function Loading() {
    return (
        <div class="loading-wave">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
    )    
}

export { Loading };