import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import Grid from "../../containers/Grid"

const VideoWrapper = styled.div`
  padding-top: 56.25%;
  position: relative;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const VimeoSection = ({ url, image }) => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <Grid.Container marginTop={["3.7rem"]} marginBottom={["3.7rem"]}>
      <VideoWrapper>
        <ReactPlayer
          className="react-player"
          url={url}
          playing={playing}
          onClick={() => setPlaying(!playing)}
          light={image}
          controls={true}
          width="100%"
          height="100%"
        />
      </VideoWrapper>
    </Grid.Container>
  )
}

export default VimeoSection
