import React from "react";
import { Slider, Handles, Tracks } from "react-compound-slider";
import "../Filter/Filter.scss";

const PriceSlider = () => {
  function Track({ source, target, getTrackProps }: any) {
    return (
      <div
        style={{
          position: "absolute",
          height: 10,
          zIndex: 1,
          marginTop: 35,
          backgroundColor: "#546C91",
          borderRadius: 5,
          cursor: "pointer",
          left: `${source.percent}%`,
          width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps()}
      />
    );
  }

  function Handle({ handle: { id, value, percent }, getHandleProps }: any) {
    return (
      <div
        className="filter__slider-handle"
        style={{
          left: `${percent}%`,
          position: "absolute",
        }}
        {...getHandleProps(id)}
      >
        <div className="filter__slider-output">{`$ ${value}`}</div>
      </div>
    );
  }

  return (
    <Slider className="filter__slider-container" domain={[0, 100]} values={[30]} step={1} mode={2}>
      <div className="filter__slider" />
      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map(handle => (
              <Handle key={handle.id} handle={handle} getHandleProps={getHandleProps} />
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
  );
};

export default PriceSlider;
