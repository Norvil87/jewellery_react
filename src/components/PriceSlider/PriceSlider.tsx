import React from "react";
import { Slider, Handles, Tracks, Rail } from "react-compound-slider";
import "./PriceSlider.scss";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { setPrice } from "../../store/actions";

const PriceSlider = () => {
  const { minDefault, maxDefault, minCurrent, maxCurrent } = useSelector(
    (state: IRootState) => state.priceFilter
  );
  const dispatch = useDispatch();

  function Track({ source, target, getTrackProps }: any) {
    return (
      <div
        className="filter__slider-track"
        style={{
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

  const handleSlideEnd = (values: number[]) => {
    dispatch(setPrice(values));
  };

  return (
    <Slider
      className="filter__slider-container"
      domain={[minDefault, maxDefault]}
      values={[minCurrent, maxCurrent]}
      step={1}
      mode={2}
      onSlideEnd={handleSlideEnd}
    >
      <div className="filter__slider" />
      <Rail>{({ getRailProps }) => <div className="filter__slider-rail" {...getRailProps()} />}</Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map(handle => (
              <Handle key={handle.id} handle={handle} getHandleProps={getHandleProps} />
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false} left={false}>
        {({ tracks, getTrackProps }) => (
          <div>
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
