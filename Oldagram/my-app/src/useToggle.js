import {useState} from "react"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function useToggler(defaultOnValue = false) {
    // Create the state
    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)
    
    // Create a function for easily flipping the isToggledOn value
    function toggle() {
        setIsToggledOn(prev => !prev)
    }
    
    // Return something useful for whatever component will be using this hook
    return [isToggledOn, toggle]
}

export default useToggler