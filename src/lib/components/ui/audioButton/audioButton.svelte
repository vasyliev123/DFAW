<script lang="ts">
    import TiVolumeUp from 'svelte-icons/ti/TiVolumeUp.svelte'
    export let audioUrl: string | undefined = undefined;
    const audioElement = document.getElementById('Pronunciation') as HTMLAudioElement;
    let audioPlaying = false;
</script>

<div>
    <audio id="Pronunciation">
        <source src={audioUrl} type="audio/mp3">
    </audio>
    <button on:click={()=> {
        if (audioPlaying) {
            audioElement.pause();
            audioPlaying = false;
        } else {
            audioElement.play();
            audioPlaying = true;
        }
    }}></button>
    <TiVolumeUp/>
</div>