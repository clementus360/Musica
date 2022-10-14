export const Tag = ({tag, active}) => {
  return (
	<div className={`cursor-pointer p-2 pl-4 pr-4 font-thin text-sm ${active? 'text-darkGrey bg-secondary':'border-[0.1rem] text-lightGrey bg-darkGrey'} w-max rounded-4xl`}>
		{tag.title}
	</div>
  )
}
