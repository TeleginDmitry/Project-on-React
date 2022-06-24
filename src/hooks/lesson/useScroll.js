import { useEffect, useRef } from "react"

export const useScroll = ( parentRef, childRef,loading,page, callback) => {
    const observer = useRef()

    useEffect(() => {
        if (loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting && page < 11) {
                callback()
                console.log('fff')
            }
        })

        observer.current.observe(childRef.current)
        
    }, [loading])
}