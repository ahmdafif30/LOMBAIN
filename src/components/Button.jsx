const Button = (props) => {
    const {color = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100%", title = "....", text = "text-[#4D20DD]" } = props
    return (
        <button class={`mt-10 h-10 px-10 font-semibold text-xl ${color} ${text} type="submit border-2 border-[#4D20DD] rounded-full`}>
          {title}
        </button>
    )
}

export default Button