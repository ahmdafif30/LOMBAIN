const Button = (props) => {
    const {color = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100%", title = "....", textColor = "text-[#4D20DD]" } = props
    return (
        <button class={`mt-10 h-10 px-10 font-semibold text-xl ${color} ${textColor} type="submit border-2 border-[#4D20DD] rounded-full`}>
          {title}
        </button>
    )
}

export default Button