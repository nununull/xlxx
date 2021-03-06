const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();

const SPEECH_UTIL = {
    playVoice(msg) {
        this.handleSpeak(msg) // 传入需要播放的文字
    },
    // 语音播报的函数
    handleSpeak(text) {

        msg.text = text;     // 设置在说话时将合成的文本内容
        msg.lang = "zh-CN";  // 设置话语的语言。 例如：“zh-cn”表示中文
        msg.volume = 1;      // 设置将在其中发言的音量。区间范围是0到1，默认是1
        msg.rate = 1;        // 设置说话的速度。默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍
        msg.pitch = 1;       // 设置说话的音调(音高)。范围从0（最小）到2（最大）。默认值为1

        synth.speak(msg);    // 播放
    },
    // 语音停止
    handleStop(e) {

        msg.text = e;
        msg.lang = "zh-CN";

        synth.cancel(msg);
    }
}

export default SPEECH_UTIL;