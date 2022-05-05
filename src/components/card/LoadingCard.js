import * as ImIcons from "react-icons/im";

const LoadingCard = ({error, url, errorType}) => {
	return (
		<div className="fixed-top loading__card">
			<p>{
				error?
				<>
				{
					errorType?
					<span>This user does not exist</span>
					:
					<>
						<span>An error occurred</span>
						<a href={url}>Try again</a>
					</>
				}
				</>
				:<ImIcons.ImSpinner8 />
			}</p>
		</div>
	)
}

export default LoadingCard;