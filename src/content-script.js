/**
 * This extension works by adding a fake 'ga' (Google Analytics) function to
 * the Factba.se search page.
 *
 * Because we can't directly access the 'window' object, which is where
 * Factba.se expects to find the 'ga' object, we have to add it by using a
 * dynamically created script tag. It's kind of hacky but hey, it works.
 */
const script = document.createElement('script')
script.innerText = 'window.ga = () => {}'
document.head.appendChild(script)

/**
 * And last but not least, we hide the
 * "apologies, search may not work for you" error message.
 */
document.getElementById('filterline')?.remove() ??
    console.error('#filterline element not found')
