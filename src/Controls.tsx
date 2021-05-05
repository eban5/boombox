import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faPauseCircle,
	faFastForward,
	faFastBackward,
} from "@fortawesome/free-solid-svg-icons";
import "./Controls.css";

interface ControlsProps {
	isPlaying: boolean;
	onPlayClick: Function;
}
const Controls = (props: ControlsProps) => {
	const { isPlaying, onPlayClick } = props;

	return (
		<>
			{" "}
			<div className="buttons">
				<div className="control-icon">
					<FontAwesomeIcon icon={faFastBackward} />
				</div>
				<div className="control-icon">
					{!isPlaying ? (
						<FontAwesomeIcon
							icon={faPlayCircle}
							onClick={() => onPlayClick(!isPlaying)}
						/>
					) : (
						<FontAwesomeIcon
							icon={faPauseCircle}
							onClick={() => onPlayClick(!isPlaying)}
						/>
					)}
				</div>
				<div className="control-icon">
					<FontAwesomeIcon icon={faFastForward} />
				</div>
			</div>
			<div className="progress">
				<input
					type="range"
					// value={0}
					step="1"
					min="0"
					// max={duration ? duration : `${duration}`}
					className="progress-range"
					// onChange={(e) => onScrub(e.target.value)}
					// onMouseUp={onScrubEnd}
					// onKeyUp={onScrubEnd}
					// style={{ background: trackStyling }}
				/>
			</div>
		</>
	);
};

export default Controls;
