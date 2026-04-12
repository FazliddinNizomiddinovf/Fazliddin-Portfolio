import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState({ name: '', email: '', phone: '', message: '' })

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const createBot = `8415611944:AAFdMNq8mCjf0gHOK6Iext5i-2irSX3sN_U`
    const createBotcode = '8440344034'
    const [subbitt, setSubbit] = useState(false)

    const handlesubbit = async (e) => {
        e.preventDefault()
        const info = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
        let text = `
        👋 Yangi Dasturchi:

        Sizga murojat xatini yubordi.

        🧑 Ismi: ${info.name}

        📧 Email: ${info.email}

        📞 Telefon: ${info.phone}

        📝 Xabar: ${info.message}
        `
        try {
            await fetch(`https://api.telegram.org/bot${createBot}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: createBotcode,
                    text: text
                })
            })
        } catch (e) {
            console.log("xatolik yuz berdi: ", e)
        }
    }
    const subbit = async (e) => {
        e.preventDefault();
        setSubbit(true);
        let newusername = { name: '', email: '', phone: '', message: '' }
        setError(newusername)
        let newerror = { email: '' }
        setError(newerror)
        if (regexEmail.test(email) && name.length > 3 && phone && message.length > 10) {
            await handlesubbit(e)
            toast.success('Malumotlar muvaffaqiyatli yuborildi!')
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setError({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setSubbit(false); 
        } else {
            let error = { name: '', email: '', phone: '', message: '' }
            if (!regexEmail.test(email)) {
                error.email = 'Email noto\'g\'ri formatda'
            }
            if (name.length < 3) {
                error.name = 'Ism 3 ta harfdan kam bo\'lmasligi kerak'
            }
            if (!phone) {
                error.phone = 'Telefon raqam kiritilishi kerak'
            }
            if (message.length < 10) {
                error.message = 'Xabar 10 ta harfdan kam bo\'lmasligi kerak'
            }
            setError(error)
            toast.error('Siz hali malumotlarni tuldirmadingiz')
        }
    }
    return (
        <>
            <form onSubmit={subbit}>
                <div className="grid md:grid-cols-2 gap-10 items-center mb-10 max-xxc:block">
                    <div className="bg-[#0f172a]/60 border border-white/10 backdrop-blur-xl p-8 rounded-2xl max-xxc:mb-10 max-xxs:p-5">
                        <h1 className="text-2xl mb-5 font-bold max-xxc:text-3xl max-sm:text-2xl">Bog'lanish uchun malumotlar</h1>
                        <div className="mb-10 max-lg:mb-5">
                            <h1 className="text-lg font-semibold mb-3 max-lg:text-base max-xxc:text-lg max-sm:text-base max-xxss:text-sm max-xm:text-xs">📍 Qashqadaryo | Kitob Tumani</h1>
                            <h1 className="text-lg font-semibold mb-3 max-lg:text-base max-xxc:text-lg max-sm:text-base max-xxss:text-sm max-xm:text-xs">📧 nizomiddinov20112012@gmail.com</h1>
                            <h1 className="text-lg font-semibold mb-3 max-lg:text-base max-xxc:text-lg max-sm:text-base max-xxss:text-sm max-xm:text-xs">📞 +998 88 306 09 96</h1>
                        </div>
                        <div>
                            <h3 className="mb-5 font-bold text-2xl max-xxc:text-3xl max-sm:text-2xl">Ijtimoiy tarmoqlar</h3>
                            <div>
                                <div className="flex flex-wrap gap-6">
                                    <a href="https://t.me/Fazliddin_iq" className="px-4 py-2 flex gap-2 items-center bg-blue-600 rounded-lg hover:bg-blue-700 transition "><svg className="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" /></svg>Telegram</a>
                                    <a href="#" className="px-4 py-2 flex gap-2 items-center bg-pink-600 rounded-lg hover:bg-pink-700 transition "><svg className="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>Instagram</a>
                                    <a href="https://github.com/FazliddinNizomiddinovf" className="px-4 py-2 flex gap-2 items-center bg-gray-700 rounded-lg hover:bg-gray-800 transition"><svg className="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" /></svg>GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0f172a]/60 border border-white/10 backdrop-blur-xl p-7 rounded-2xl max-xxs:p-5">
                        <span className="flex gap-5 max-lg:block max-lg:gap-2 max-xxc:flex max-xxc:gap-5 max-xmx:block">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className={`w-full mb-4 px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition duration-300`} />
                            <div className="flex gap-2 items-center w-full mb-4 px-3 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30 transition">
                                <h1>+998</h1>
                                <p className="w-0.5 rounded-lg h-5 bg-[#9DA3AF]"></p>
                                <input maxLength={9} value={phone} onChange={(e) => { const onlyNumbers = e.target.value.replace(/\D/g, ""); if (onlyNumbers.length <= 9) { setPhone(onlyNumbers) } }} type="tel" inputMode="numeric" placeholder="Phone Number" className="bg-transparent w-full outline-none" />
                            </div>
                        </span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition duration-300 " />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows="4" className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition duration-300 " />
                        <button disabled={subbitt} className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300
                               ${subbitt
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-[#4770ff] hover:bg-[#305bf5]'
                                }`}>
                            {subbitt ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5 animate-spin fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" /></svg>
                                    Yuborilmoqda...
                                </span>
                            ) : (
                                "Send Message 🚀"
                            )}
                        </button>
                    </div>
                </div>
                <div className="bg-[#0f172a]/60 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">
                    <iframe width={'100%'} height={'500'} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d773.7581567015026!2d66.96956726958747!3d39.12848899822974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA3JzQyLjYiTiA2NsKwNTgnMTIuOCJF!5e0!3m2!1suz!2s!4v1771258302709!5m2!1suz!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
                </div>
            </form>
        </>
    );
}
