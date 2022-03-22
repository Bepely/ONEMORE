<script>
import Title from "./parts/title.svelte"
import Picker from "./parts/picker.svelte"
import Gallery from "./parts/gallery.svelte"
import Price from "./parts/price.svelte"
import Contacts from "./parts/contacts.svelte"

</script>

<div id="root">
	<Title />

	<Gallery />

	<Price />
	

</div>


<style>

	#root{
		display: grid;
		place-items: center;

		background-color: #DDDDDD;
		
	}
</style>
