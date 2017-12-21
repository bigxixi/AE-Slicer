//Script by bigxixi, contact xixi@bigxixi.com
//接下来要做的功能：
// 1、加入png序列/雪碧图导出功能
// 2、生成html标注（类似 sketch measure
(function ALL(thisObj)
{
	//提示文本
    //Tips
    var vs = " v1.0";
	var scriptName = "AE Slicer";
	var description = "Save PNG slices in AE. Support multiple slice zones in one comp.";
    var btnhelptip1 = "Generate slice guides.";
    var btn1text = "Generate Guides";
	var btnhelptip2 = "Slice images base on slice guides.";
    var btn2text = "Slice";
    var btnhelptip3 = "Clear slice guides";
    var btn3text = "Clear all Guides";
	var btnhelptip4 = "Help contents.";
	var btn4text = "HELP";
    var savetip = "Select a slice destination";
    var saveNameTip = "slices";
	var alert1 = "Please acive a composition.";
	var error1 = "Please run the script again.";
	var RQerr = "Render Queue is rendering item, please wait for it complete or stop it.";
	var endmsg = "Done!\nYour slices are here:\n";
	var CheckAccessTip = "Please check this option:\n'Preferences->General->Allow Scripts to Write Files and Access Network'";
    var scriptNotRun = "Fail to run the script, please try again!";
    var bannerBin = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00D2\x00\x00\x00P\b\x03\x00\x00\x00[?\u00DB\u00A3\x00\x00\x01 PLTE\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\x02\x01\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u008F\u008F\u008F\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x01\u00FF\x02\x00\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x02\x00\u00FF\x01\x00\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\x02\x01\u00FF\x02\x00\u00FF\x01\x00\u00FF\x02\x01\u00FF\u00FF\u00FF\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\x02\x00\u00E2\u0084U\r\x00\x00\x00]tRNS\x00\u00AA\u00EE\x11w\u00CC\"wZD\x0F\u00DD\u0096f\x1E\x10\u00A5<\x033\u00EE\u0099\u00BB/\u00CD\u00B3\u00F8\u00E6\u00E4\x17\u00DD\u00AA\u0088\"\u00FC\u00F2\u00D9\u00BB\u0097\u0088}\t\u00F8oKD\x0B\u00E1\u00D4\u008D_U;\u00F4\u00C1\x1C\u00F0\u00EA\u009C\u008E\u0084\u0080sT73+!\x18\x14\u00C5\u00A8\u009Dh\u00D4\u00B7\u00A2\u0083ngdW(\t\u00A1G\u00D7\u0088XQPNA\u0098M\x06\u00D3\x00\x00\x05-IDATx\u00DA\u00EC\u00D4I\n\u0083@\x10F\u00E1w\u008E\u00A6w\r\u009D\u00BD\u00B8QWFW\u00E2\u0080\b\t!\u00D0\u00FF\u00FDo\u0091\u0081\f7H\u00E8\u00C2\x0F\u008AZ?\n\n`\u00AA\u00A4p\u00C6\u008E\u00DE\u00AB.\u00DB\u00A8\u00AA\u00C7\n\x1F6\u00AE+\u009B\x0F\x181\tp\x02\x14\u00B1A#\u00B4R\tQ\u00D8\u00A0\u00E3:h.4,\u009D\u009D\u00A4\u00C2\u00AB\u00B8\u00C8\u00CF\u009D \u00DD\u0091\u00E9z\u00CC\u0093j(\u00A5\x12\u009A\u00DC\u00AF\u00F4Nj\u00BE\u00EFa$o\u0089\u0097\u00E0\u00A1X\u00E0\u00E4\u00C8\u00DC'\u00A9\u00AF\x14\u00DBc\u00E3\\\u0087\x1D1H\u00AEf\u00B7\u00FB\u0081\u00849\u00C9^\u00E0\u009E\u0094\x1F\u0083I\x7Fp\u00C0\u009C\x1B\u00B7e\u00D3\u009B8\f\u0084\u00E1I\u00A0\x12EUUrH\u0084\"\"\x05E\u00E2#\u0088\u00C0!\u00C0\u00A1|\\\u00A0T\u00BDTU+U\u00AB}\u00FF\u00FF\u00DFX\u00BB\f\u00D9I\u00A0\u00AE\u00D9\u00C3\x1ExN\u008C\x1D\u0083\x1Fgf0\x1AW\u0097jpk\u00D7\u00D6\x1E\u0080\u00C7\u00EBS\n\u00BD\u00FF\u00AD\x14\u00B8\u008A\u00BE\x18H\u00DD\x13\u00E6t\u00C2 \u009D\u0085<\u009B\u00BD4<\u00D2L\u00CF<\n`\u00C4\x1F\u00BD\u00CF\u0097\u008C\u0097\u0084\u00BB\u00D5\u00804k\u00F7\u0084\rQ\u00D3\u0095$\u00CE\u00C7e\u0095\u00E5@!\x13\u00BE\u008E\x13\u00EE\u00A9J\u009C@\u00E27Iq'\x1E\x15J\u00EF\u00F4E\u00D3\u0087$\u0089I\u00D1\u00C0\t-\u00F5(*\u00EC=\u00B2\u00E7\u00AD\x0BM\u00FF2\u00A5A\u00822m\u0083R&\u00CEN:\r\u00EC\u0095\u00D0#{\x1E\u00F0\u0085;.)%7%:T!\u0085b\u00C2\u00B3\x11o\u00E4\x1B%\x1E\u00DB@\x11\u00F1\u0092\t\x14+VR\u0083\u0092\u00E0\u00A0\u00E4\x16\x03\u00A1\u008A\u0086s\u00EB\u0086\x10w\u0081HoeURj\u0091\u0099\u00D9\u00A1D\u0098\u00A5\u008A\u00A6\x06\u00A5_\u00A4\u00E8A6\u00BF\u0091\u008Av\u00AC\u00D4\u00A0*Z\u00E9\u00A1\u0088\u00BCw\x15>[\u00B7\u0087\u00BD~z>\x04\u00C2\u00C1%J\x11\x10\u0089\x1D8\u008E\u00B32(\u00F5\u008Fy'\u00DEv\x02\u0084\u0096J\u00D4\u00E2\u00D3\u00B0R\u00BAW2\u0099GwZ\u00EC\x12\u00A5\x1B \u00AFd\u00A3AiO\u008A6\u0080&\x15L\u0080\u0085\u00AD\u00D23g\u0091QIn\"\u00D5\u00E9\u00A7\u00CD\u0084R\u00BF.\u00D9R\u0095\u00A9.\u0081%O\u00A7\x1F\u009EY\u00C9?\u00A3\u0094\u00F6zKV\u009A\u00D6%q\u00A1\x14\u00F3\u00C8\u00DDP\u0085\x1B\u00CB&\u00DE\u00C99\u00E3t\u00B6\u00BE\n\u00A5\u008F\x19\x04\x01U\u00B9\u00CF!\tGF\u00A5\u0089T\u0092\u00F0[r \x18\x15J\u009E\u00E8\u00FA>\u00D9\u00C0\u0087]?\u00B6\u00F2\u00C4\x13\u00897\u009E\x19\u0095h=\u0084\u00A4\u00BB6)e?(y\u00CEY%\u00EA\u0084`\u00A29\u00D9\u00B1\u00CD\u008B\u00EE\u00ED\u00E8\u00AF\u0096\u00B5\u00A4\u009CLJ\u00B4\u00D9A\u00B2\u00A8\x19\u0094\x16?(\u0091p\u0092J\u00F4\u00BB\x0BM\u00BE\u00DF\u00DA\u00DE\u00EA\x1Eu\"?\u00F9\u009A\u0089\u00CE\x0FO(\u00D1\u00F8\u00B6`L\u00E7\u00E8\u00B4xz\u00AD\x17\u00A7\x06\u00A5\u00E1\x19\u00A5\u00BD\u00EF\u00B7\x0B%\u00F2n\x0B\u00B6B\u0089\u00FAP\u00BC\x0E\u00AC\u00EFx\u00B5\u0085>\u00DD\u00C0\u00C5\u0091\u00B5P\u00BA\u0084@\u00EF\u00C0\u00A0\u0084\x7F\u00EDx\u0087rJ\u00C6\u00D6J\u00FD\u00C3E\u00E3\u00AF\u00D3\u008D\u00B5\u0092\x1FE;*\u0098\x03p\u00BEW\u00A2\"\u00B5EEd@\u00F4\u00A3\x12\u0097\u00D3\u0093\u00AD\u00D2X\u00A9\u00E4[RN\u0099\u00AB\u00C8u\x1E\x1F\u0095F\u00B5\x12\x1EI\u00F8\u00C8{\x1D\u009E\u008Du\u00B4d\u00A5\u00A0\u00BC\u008E\u0095\u00F8\x00\u00DB1Otz*za\u00A5\u00D7\u00CA\u008F\t%.\u00A7g\u00CB\u009B\u00F8JWR\u00F9/zg{m]\u00A3B\u00F7\u008D\u0095J\x04B)\x1E\u00A2\u00C2\u00A7\u00F1\u00DA\u00FA ri\x18\u0090\r\u0083?\u00ED\u009B\u00C1K\u00C30\x14\u00C6\u00BF]\x124\u00D6\f\u0092bA\u00A4U\x18*RA\x06\u009E\x14\u00BC\u0088\x07/\u00E2\u00D1\u00C3\u00FB\u00FF\u00FF\f\u00F3\u00D6\u00B0%\u00D9`\u00F5d\u0096\u00F5\u00BB\u0094\u00EFK\n\u00FD\u0091\u00E6\x11\x02\u00EF\u00D2M\u00BDJ\u00CEm'\u00E3\u0090x\u0099b\u00BD`\x1F\x12^\u0093\u00C1O\u008CA\u00F2\u00DB\u00E9\x14#\u00C4\u0087\u00E9\u00B308q\u00C1\u00F3X\u00A4\u00FBy\u00B4F/\u00D8\u008F\u0084\u00D7\u009Bpl\u00F68\x0E\u00C9o\u00A71E\u00FC\u00C9\u009D5\u00E3O=s\u00C9\x15\u00F03\u00DB\u00D2;\u00B6\u00F5v\u00FB\u00E1G\u00E7w\u00D7C\u00F4\u0095\u00BEw\x1E!\u00E1\u00FAn\u00EE\x07>n\u00DF\u00FC\u00EF>\u00DB\u00D27p\u00EF\x1E\x0F\x00\u00829\x17\u00F9\u00DC=\u00ACU\u00CEu\n&\u00A4\u0083\u00BB\u00A8\u009Ct,*\u00F0W+\u00B0<LH\u0087\u00A7\u00FF@\x12\u00C4R\x15:Z\u00B2\u00EF\u00A8\x0FS\u00D4\x04\u00C0\u00B4\u00EC$ I\x02\u00E8I\n\u0092\u00B1\u00C9H\u0082*\x00\x0B\u00D2h\u00AC\x00\u0096$\u00E3\u0094\u0091zZ\b\u00C6\u00E9\u0080\u0096\f\u0084\u00ED\u00E0(6&K\u00A4\u009E\f\u00B4j\u00A0m\u009B\u00A4\u008C\u00A4\u0086\u00B0\u0092\u0080n\u0094Q\rO\u0088MN\u00BB\u00C7\u00AFG\r\u00C0P\u00D7*\x1D\u00A7\u008Cdh\x19\u00CC\u00B7\u00A4\u00B4\u00A7\bLN\u00E5A\u00D0J\r\u00A3H\u00B2&I\x19\u00A9\"\x01T\u00EC\x05\u0080\u0096:\f\x14\u00DEd\u0088T\x01\u00A8\u0086\u008F\u00A2:M\u0083U\x1A\u00D0$5l\u0099\u00C2\u009BL\u0091\u00A0:\u008F\u0094\u00A4\u00D1^\"\u00B1*\x1F\x0Bk\x06\u008A\u00C0\u00E4U\u00C4\u0087\u00F5\u00E8=R\u009A\u00FA\u008Ag\x00i\u00956\\>\u00B4R\u009A)\u00D6&\u00BB\u008A\u00C7\u00B2\x12\x1E)Mkb[;\u00A7:\b\u00D5\u00C0\u00C9\u00D0\u00C2QlLfH\u0083\x0E\u00FC\u00BC\u00B0K\u00D3\x19oB*K\x05\"\x15\u00A0\u00A9\u00A31\x7Fm:\x1AK\u00D9KaGc!H;:\x1A\u0089\u00F2h~\u00FB\u00F3CXk\u009B\u00C2:\x1A\u00B5S\u00D8\u00D1X\x00Rq\x1D\u008D(\u00AF\u00A3\x11\u00E5u4\u00E28:\x1A\x7F\x01u\u00B2\u0088\u0099\u00DAS\u00D9j\x00\x00\x00\x00IEND\u00AEB`\u0082";
    var helpText = 'How to use:\n' + 
    '-1. Click \'Generate Guides\' to generate 1 dashed frame and 2 corner points. Move the points to set the frame size.\n' + 
    '-2. Click \'Slice\' to generate PNGs from the frame area. You can generate more than one slice guide groups in one composition.  All slices in this comp will be exported to one folder.\n' + 
    '-3. The guides are not renderable,  you can clear them with the button \'Clear All Guides\'.\n' + 
    '-4. Feel free to contact me via xixi@bigxixi.com\n' + 
    '';
    //for Chinese users
	//如果你的AE是中文版。。。
	if($.locale.toLowerCase() == "zh_cn"){
		scriptName = "AE 切图脚本";
		description = "在AE里导出指定区域的png切图，支持同时切多个区域。";
		btn1text = "生成切图辅助线";
		btnhelptip1 = "生成切图辅助线，虚线内为切图区域，移动两个点控制区域位置好的大小。";
		btn2text = "生成切图";
        btnhelptip2 = "根据切图区域生成PNG图片。";
        btnhelptip3 = "清除辅助线";
        btn3text = "清除切图辅助线";
        btnhelptip4 = "阅读帮助";
        btn4text = "HELP";
        savetip = "选择存放路径。";
        saveNameTip = "切图";
		alert1 = "请打开一个合成。";
		error1 = "请重新运行脚本。";
		RQerr = "渲染队列有正在渲染的项目，请等待渲染完成后继续。";
		endmsg = "导出成功！\n切图文件在：\n";
		CheckAccessTip = "请勾选 ‘首选项’->'常规'->'允许脚本写入文件和访问网络'。"
        scriptNotRun = "脚本运行失败，请重新运行。";
        bannerBin = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00D2\x00\x00\x00P\b\x03\x00\x00\x00[?\u00DB\u00A3\x00\x00\x01)PLTE\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x01\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x01\x00\u008F\u008F\u008F\u00FF\x01\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x02\x00\u00FF\x02\x00\u00FF\u00FF\u00FF\u00FF\x02\x00\u00FF\x01\x00\u00FF\x02\x00\u00FF\x01\x00\u00FF\x02\x00\u00FF\x02\x00\u00FF\x02\x02\u00FF\x02\x00\u00FF\x02\x00\u00FF\u00FF\u00FF\u008F\u008F\u008F\u00FF\x02\x00zzzY\u00BA\u00A0\x0E\x00\x00\x00_tRNS\x00x\u00AA\"\u00C3\u00F1\u00BBfw\u00CC\x01<\x10\u00FC-\u0099\u0096\u00A5K\u00DDfU\u00DE\u00EE\x10\"\x053\u00EE\u0099\u00F9\u00F7\u00F6i\u00E1\u00CD\u00AE\u00A0|\f\u00E5\u0097`\x1E\u00EA\u00E4\u00D6\u00AA\u0088ZB\u00C7\u00BB\u0087\u0082pG6\x1E\x1A\u00DB\u00C0\u00B5\u008AD0'\x18\x14\u00F2\u00D0\u009F\u008EU;\u00A4\u0090\t\u00EC\u00D5tQ3+\f\u00E6\u0083n^WOifb\\\u00AE'?)\x00\x00\x06tIDATx\u00DA\u00EC\u00D5K\n\u00840\x10E\u00D1;v\x13\u0099&[p.\u0086\f\x14T\u00FC\u00F5\x07\u00DF\u00FE7\u00D1\u0081\u00C6\u00DEA\x0FR\u00E4@\u00C8\u00F8RPE\u00B6\x0ER\x17\u00B1c\u00F1\u00EA\u00D3\x144\u00B4X\u00E1\u00BB\u0085\u00F3\u00C8e\x1DF\u00ACj\u00C0\tP\u00C0\x06\u00F50I\t\u0082\u00B0A\u00F31j\u00DB5>[;Io\u00AF\u00D7)\u00BF\u00B5\u0082+\u00A3\u00D0/\u00BF/\x05HR\u0082X\u00FA\u0094\u00EE\u00A4(\u00EE\u00F5\u00D0S\u00B6;\u0089\u00CE\u00C3\u00FE\u0080\u00D1Q\u00B8_R;(Lst\u00CE\u00CE\u00A9\u0085\u00E0$\u00D77T\u00D5\u00FF]\u0098s\u00D9\x0B\u00ACI\u00E51\u0098T}h\u00AD\u0097\u00D6\u00C4\u00A10\x0E\u00E3\u00EF\x11\u00B5$z\u00BC\u0081\u008AY\x04-j\u00C1\x1BT\u00F1\u0086\u00ADb\x157\u00B5P\x17]?0\u00DF\u00FFCL2gNL\u00ED\u0085\u00AA3\u00CFB#H\u00C8\x0F\u0092\u00BF~\x17 W\u00F42\x1C\u00CA\x17\u00CD\u00D4\u00F4\u00DF\u00DCj7\u00E9t\u00BA&Q\u00B5\u00F4\u00FBjg\u009067\u009F\u00B4\u0096\u00B0u9\u00ECI\u00A4KJ\u00BE\u00A8@\u00EA\u009F\u00CC\u0083{\x0BL$*\u00C7\u00FBr_\u0091^\x12\u00B1\u009E%,\u00C3')s\u00B9\u00E6\u00D8\u0092\u00F6\u00E90\u00F5\x7FH3\u0080\u00BEw>)K\u00AC\u0094%\u00E5\u00C3\x12\u00F9\u00A8\u00B7\u0088t\u00EB\u00F4\u008F\u00A4$a\u00C5\u00FFCj\u0082\u0086R\u008C\u00F4\u00DD\u0089\x7F\u00FD\u008AHw\u008E\u00E3\u00D4\u00A9:A=\u00FA\u0096$A\u00AFz%\u00B6dDj\u0088Bu\u009C\x1D\u00DAq\u00D6IZjiH[e\x1BQW\u00B6\u00F9\u00E5#\u00BE\u00D0\u00F8\x13X\u009EG\u00B2\u00EDhIP\u008BJ\u008C4\u00F7u\u00A9f\u00F2NI\n\u00C22IJ\u00A2\f)\u00C7g)\u00B9\u00B86$\u00B2u\u00F4\u00E2\x1CR\u00A4z\u00A0 AEvGR\u00ADGT\u00EE\u0094\u00F4TnP/\u0097\u00B71\u00D2S\u00C5\u00D4'\u00ACZ15\u00E4\u0092\u00EC8\f\u00A5\b\u00ED\x1F\u0090L@\u00F4\u0095[V\x12\u00B4d\x14\u0091\u00BA\u00B7\u0090PA\u0093:\u00FDM\u008C\u0094/\x17\u00E3\u00CF\u0092%EM\b\x1B]=\u00E23\u00A8\u00B82\f_\u00CF\"U\u00CDq\u00CFle\u009A\u00A4%\u00AD\u00DFH\u00FB\u00F5{\u0091\u00F5\u008E]Wb$\u00E0;\u00D26\u00C5\x1BZs\u00B8v\x1E\u009A\u00A0D\u00DC\n\f\u00CF\"U\u00CC\u00B1\u00E6\u00D5l\u00C0\u00D2\u0092r\u00D5\u00B1;\u00AC\u0092\u00D8kZwbIv\u00F1\u00BE!\x15x\u00C8\u0093*2\u00F0\u00AE#-4z\u00F3\u00F7\u0089\u00FA|\u00C4\u00BF 9f\u00F4\u00E0F\u0082\x1C\u009A\u0096$\u00E1\u00E9J>0v?Y\u00BCVb\u0089\u009FH\u00A8\x0F\u00A4\u00B9\u00E6\u00BE@\u00EAI3\u00BD\u008E\u00D4\u00C6\\LW\u00E3o\u00CF!\x19B\r\u00CA\x124\u00A0\x18\u009B\u0087\u00A9\x03o\x0F\u00D0/\x1C6\u00A7\u00A4\x14\u0084-OI/\x03\x1C7 \u00C9\u009E\u00FA\u00D35\u00FF\u00C4\u00DD[\u00FB\u008B\u00B4\u0084\u00D7\u0088\u00A4\u00D3\u00C7\u00BE \u00AD,anV\"o?7\x06\u00C0\u00E8\u00DEs\x0FK\r<Z\u00D2\u00B3!M\u00C6\x03\u009A\u00E3q\u00E7\u0094\u00D4B\u00AF%$e\u00FB\f\u00EE\u00E4\u00F2Jpkf\u00A1\f\u0083s\u009E\u00A5\u008E\u0084\u00DD\u00C0\u00C6\u00AC\u00C4\u00DE\u0092:\u00EC&\u00C9\u0087\u00E24\u00F3\"\u00D9\u00FBbUYR\u0091d~\u0084\n\u00F9\u008B\u00CD\u0087gI\u00C1D\u00FE\u0090\u00A4\x04KO.\u00AEI\u00BC\u00CC\x19\u00A4\u009C\u0084\u00E5\u00E9KX\u008A\u00B1%y5\u0091U\x1F\u00D0\u00CEX\u00C4\u00F5\u008E$\u00B3x9\u009C\u0082^\u009C\u0090\u00CA\u009A\u00A4\u00F7\u0097${(\u00BA\u0097\u008E\u00F8B\x13\u00AF\u00F5sR\u00CF5\u00F7-fT\u00A0mI\u00F2\u00A7ny\u00F5XO\u00C7\u00E7\u00A1Is\u00FC\u0088\x12\u00C5\u00E4\u0095\u00E9{\u00D2A\u00D3_\u0088%yiHx\x17\u00CEC\x1Bz\u008E\r\u00EA\u00D9\x1F\u0092\u00AC~\b\u00F7\x12\u00E4\u0081:\u0092\u00D4\u00E3\u00EA\u00FE\u00C9\r\u00C0\u009B8i\u00C4L\x14JF\u00ACk$\u00DF\u0091:\u009A\u00D4\\\"\u0092l\x07\u00F0\u0098=\u009Bd\u00C7\u00A1,6\x07\x1A?&\x1D$\u00C8\x1DQ\u00BD\u0093\u00A0,4\u008E\u00A4\u00BD\x06R\u00C6u$=0\x0FI5\x06\"\u008E^\u0084\u00A46!\u00C9U\u00E0\x0F\u0093\u00D5 \x1F\u00AAa\u00B3\nT\u00D6\u0097\u0090J\u00D0\u00F3\u00C4\u00D6\u0080\u00DDOI\u00BD\x17\t\u009A\u00DA\u00FB\u00AD\x0B\u009D#I\u00EE2\u00D3\u00D6@\x03U/\"y>\u00DB\u0090\u00B4\"?\u00EB<\u00D2H\u00F2\u009C\u00EE\u00917W\u00E1\u0097dG\u00AC\\w\x00\u00E3KF\u00BC\t+\u0089\u00CA\u00D6anH~\"V\u00E6#\u00C9H\u0086>\x0Fwv\u00F8\x0E\x11)\u00CC\u00B8\u009E\u009B\x12\u00912\u00BC\u0089(\u00DA>`\u00B6\u00BD\x00\u00CC$\u00A8U\x0F\u00DEf\u00E5\u00A04\u00F5rXV6\u00A3\u00A6+\u00E7\u00B7\u00D0\u00F0\u00BB}3\u00DAm\x13\u0086\u00C2\u00F0I\u009C\u00AD\x0EbC\u009A\u00D1B\u0082\u00A9\u00BA\u00B1\f)\u00AA\x04\u00E9\u00B2u\u00D12\u0089U\u00B9\u0089\u00B2J{\x03\u00CE\u00FB?\u00C5\u008Eq\u00DA\x18\u00A8\u00A2\u00AE\u00AB*\u0087\u00F0]\u00D8\u00FCG\\\u00F0\tc\x01\u00D2\u00B91\u00F2\u00B6(<\u00ADTa\u00DET\x1A\u00AD\u00D5E^\x14\u00E7KX\u0092\u00F4\u0090\u00CE\x1A\u00DF)\u00F5k\\j\u00A5\u00CFE\u00DF]O\u008B\u00DE\u00CF\u00F3\u00F7\u0083\u00ED\u00D7\u008FoV\u00C5\u00BCw\u00BD\x04\u00C5\u00E4\u00D7\x03\u009F\u0080\u00B7\u00C9\x13?+\x06f\u00BE\u00A2\x15\u0097<Ji\u00A6\u00D6\u00CBE9\u00DF\x14%}8\u00FC\u00A1\u00EE\u00AC\u008A\u00D9\u0080\u008E\u00CF~L\u0080\u0098\u00CD\u0086\u00C5\u00BB'\u00FD{8L\u00E2\u00BA\u00B7fv\\\u00D7u\u00F4d2i(m\u0081\u0098\u00EA\u00E5\u00E7\f\u0086\u00C3/\u009F>L\u00EE\u0095\u00CEj\u00ACJ\u00A5\u00F1\u00ABQ\u00F2mt\u00F9z\r;\x06\u00FF\u00AF\u0084\u00F0lL\u00F5\u00F5_\u00F7\u00A0\u00C1\u00D8\u00F3\u00A0\u00C6\x1F\u00EF;\x10\u00C9U\u00BD\u00FC\x16\x1A\u00CC\u00BD\u00DF\u00A7\u00F6\x03\u00B9\u0085J\u00DD?\u00F1\u008E\u00C7\u00D0-\u00B5\u0093\u00DC\x1E:\u00A5\u00E3\u00E3%\u0095\x18*\u0084\x0F\x19n(\u00D2\u0094\u009BU\u0088\u0090b\u0098\u00AA\u00C4\x018r\u008A9r\u0086\u00BC\x1A,\u0082\u00A1O\u00E3\x02\x03\u0088%\x03\u00D8 \u00AFV\u0095R\u008E\x0B\u00A6t2\u0080\x14C`2\x03\u00B2\u00D8\x07+\u0095r\f!\x101\x042\u00ADU\u0095\u0092\u00D0E\u009F\x03\x04\u00B1\bE\u00ACN\u00A8\x06\u009B6\u00F1\u00DD\u00FD\u0088h\b1KEP\u00ABFH\u00F5\u008Dq\u00BED\x11h\x0B3\u00D8\u00B4=0,\u0089\u0095\nG\x19\u00D6\u00AB\u00A4\u00E4#\x03\x1A\b\u009A!\u00C5\f\u00B4\u00C5.X\u00A8\u00E4\u00D3\u00E8\u00EB\u008B\u00C2\u00A8^5\u00EE\u0092V\u00E3\x18S\u00D4\x16:X\u00AA\x04\"\u00D3J\u008D\u00AA\u00F9,!+\u00B7\u008F\u0085\f\u00B5\u0085\x11\u00EC\u00DA\u00C4\u00F5\u00FD\u00C8\u00B5R\u00BDz\u00B7\u00E3\u0085\x00\\\u008A \u0094d\x17\b\x11(\u008B\u00FB`\u00DD\u008E\u00A7\u0090\x1C\u00B4R\u00A3\x1A\u00A1\u008A\x11%\u0091\x01\x131\x10!.\u00C8b\x1F,S\u00AAr\u00A4\u00EF\x0B\u0087\u00E8\u00DE\u00F1:\u00A5v\u00D1B\u00A5\x16\u00D0u4\u00DA\u00CF\u00BE\u00A3\u00B1-\u00CF\u0092\u00D9\u00D1\u00D8\x12\u00A5\x07:\x1A\x11\u00EDh~\u00FB\u00E7\u0089I)\u00E3vu4:\x01av4\x1E\u00BFR\u00FB:\x1A\u00A1}\x1D\u008D\u00D0\u00BE\u008EF8\u008D\u008E\u00C6\u00BF\u0083\ndA(\x14\x1B\x13\x00\x00\x00\x00IEND\u00AEB`\u0082";
        helpText = '使用帮助：\n' + 
        '-1、点击“生成切图辅助线”，会在合成中生成虚线和2个定位点。移动定位点控制虚线尺寸，虚线范围内为要切出的区域。\n' + 
        '切出的画面为当前时间的画面，可以拖动时间轴选取合适画面。\n' + 
        '可以根据需要生成多组辅助线。\n' + 
        '-2、点击“生成切图”将会导出所有虚线内的图片到一个文件夹内。\n' + 
        '-3、切图完成后可以清除切图辅助线（如果不清除也不影响渲染动画）。\n' + 
        '-4、任何问题或建议欢迎联系xixi@bigxixi.com。';
    }
    
	//绘制UI
	//draw UI
	var drawUI = UI(thisObj);
	if(drawUI instanceof Window){
			drawUI.center();
			drawUI.show();
	}else{
		drawUI.layout.layout(true);
	}

	function UI(thisObj){
        var win = (thisObj instanceof Panel) ? thisObj : new Window("palette",scriptName + vs,undefined);
            win.alignChildren = "fill";
		if(win != null){
        //加载图片
        //load banner image
        var bannerIMG = ScriptUI.newImage(bannerBin);
        var theBanner = win.add('image',undefined,bannerIMG);
        var dcp = win.add("statictext",undefined,description,{readonly:0,noecho:0,borderless:0,multiline:1,enterKeySignalsOnChange:0});
		var grp = win.add("group");
		var btn1 = grp.add("button",undefined,btn1text);
            btn1.helpTip = btnhelptip1;
		var btn2 = grp.add("button",undefined,btn2text);
            btn2.helpTip = btnhelptip2;
            btn2.alignment = ["right","center"];
        var grp2 = win.add("group");
        var btn3 = grp2.add("button",undefined,btn3text);
            btn3.helpTip = btnhelptip3;
        var btn4 = grp2.add("button",undefined,btn4text);
            btn4.helpTip = btnhelptip4;
            btn4.alignment = ["right","center"];

        var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "mac": "win";
        //var theComp = app.project.activeItem;  
            btn1.onClick=function(){
                app.beginUndoGroup("BXSlice");
                var theComp = app.project.activeItem;  
                //检查重复
                //count slice groups
                var i=1;
                for(var j=0;j<theComp.layers.length;j++){
                    if(theComp.layer(j+1).comment.split('-')[0] == 'BX_Frame'){
                        i++;
                    }
                }
                var p1Name = 'Slice CornerA ' + i;
                var p2Name = 'Slice CornerB ' + i;
                var frameName = 'Slice Region ' + i;
                var labelName = 'Label' + i;
                var posExp = '//keep pixel unit\nvar x1=Math.round(value[0]);\nvar y1=Math.round(value[1]);\n[x1,y1]';
                var sExp = 'var wh = thisComp.layer("'+frameName+'")("ADBE Root Vectors Group")("ADBE Vector Group")("ADBE Vectors Group")("ADBE Vector Shape - Rect")("ADBE Vector Rect Size");\n' + 
                            'if(wh[0]<500 || wh[1]<500)\n' + 
                            '{\n' + 
                            'var theMin = Math.min(wh[0], wh[1]);\n' + 
                            'var temp = linear(theMin,0,500,30,100);\n' + 
                            '[temp,temp]\n' + 
                            '}else{\n' + 
                            '[100,100];\n' + 
                            '}';
                var rotExp = '0;';
                var labelExpX = 'var xx=0.5*(thisComp.layer("'+p1Name+
                                '").transform.position[0] + thisComp.layer("'+p2Name+
                                '").transform.position[0]);\nvar yy=thisComp.layer("'+p1Name+
                                '").transform.position[1];\n[xx,yy]';
                var labelExpTextX = 'var wh = thisComp.layer("'+frameName+'")("ADBE Root Vectors Group")("ADBE Vector Group")("ADBE Vectors Group")("ADBE Vector Shape - Rect")("ADBE Vector Rect Size");\n' + 
                                'value = "w: " + wh[0] + "px,h: " + wh[1] + "px";';
                var labelSExp = 'var wh = thisComp.layer("'+frameName+'")("ADBE Root Vectors Group")("ADBE Vector Group")("ADBE Vectors Group")("ADBE Vector Shape - Rect")("ADBE Vector Rect Size");\n' + 
                                'if(wh[0]<200)\n' + 
                                '{\n' + 
                                'var theMin = Math.min(wh[0], wh[1]);\n' + 
                                'var temp = linear(theMin,0,200,50,100);\n' + 
                                '[temp,temp]\n' + 
                                '}else{\n' + 
                                '[100,100];\n' + 
                                '}';
                var framePosExp = 'var p1pos=thisComp.layer("'+p1Name+
                                '").transform.position;\nvar p2pos=thisComp.layer("'+p2Name+
                                '").transform.position;\nvalue = 0.5*(p1pos+p2pos)-[0.5*thisComp.width,0.5*thisComp.height];';
                var frameSizeExp =  'var p1pos=thisComp.layer("'+p1Name+
                                    '").transform.position;\nvar p2pos=thisComp.layer("'+p2Name+
                                    '").transform.position;\nvar ww=Math.abs(p2pos[0]-p1pos[0]);\nvar hh=Math.abs(p2pos[1]-p1pos[1]);\n[ww,hh]';
                //生成控制点1
                //corner point 1
                var p1 = theComp.layers.addSolid([1.0,1.0,0], 'point', 50, 50, 1);
                    p1.name = p1Name;
                    p1.comment = 'BX_PointA-' + i;
                    p1.Effects.addProperty('ADBE Fill');
                    p1.property("ADBE Effect Parade").property("ADBE Fill").property("ADBE Fill-0005").setValue(0.7);
                    p1.transform.position.setValue([0.25*theComp.width,0.25*theComp.height]);
                    p1.guideLayer = true;                   
            
                //绘制控制点图像
                //draw point shape
                var SKShape1 = new Shape();
                    SKShape1.vertices = [[25,50],[50,25],[25,0],[0,25],];
                    SKShape1.inTangents = [[-13.807119,0],[0,13.807119],[13.807119,0],[0,-13.807119],];
                    SKShape1.outTangents = [[13.807119,0],[0,-13.807119],[-13.807119,0],[0,13.807119],];
                    SKShape1.closed = true;
                var SKShape3 = new Shape();
                    SKShape3.vertices = [[25,45],[45,25],[25,5],[5,25],];
                    SKShape3.inTangents = [[-11.045695000000002,0],[0,11.045695000000002],[11.045695000000002,0],[0,-11.045695000000002],];
                    SKShape3.outTangents = [[11.045695000000002,0],[0,-11.045695000000002],[-11.045695000000002,0],[0,11.045695000000002],];
                    SKShape3.closed = true;
                var SKShape5 = new Shape();
                    SKShape5.vertices = [[17.581516999999998,22],[10,22],[10,28],[17.581516999999998,28],[22,32.418483],[22,40],[28,40],[28,32.418483],[32.418483,28],[40,28],[40,22],[32.418483,22],[28,17.581516999999998],[28,10],[22,10],[22,17.581516999999998],];
                    SKShape5.inTangents = [[0.8117650000000012,-2.005398999999997],[0,0],[0,0],[0,0],[-2.005398999999997,-0.8117650000000012],[0,0],[0,0],[0,0],[-0.8117650000000012,2.005398999999997],[0,0],[0,0],[0,0],[2.005398999999997,0.8117650000000012],[0,0],[0,0],[0,0],];
                    SKShape5.outTangents = [[0,0],[0,0],[0,0],[0.8117650000000012,2.005398999999997],[0,0],[0,0],[0,0],[2.005398999999997,-0.8117650000000012],[0,0],[0,0],[0,0],[-0.8117650000000012,-2.005398999999997],[0,0],[0,0],[0,0],[-2.005398999999997,0.8117650000000012],];
                    SKShape5.closed = true;
                var SKShape7 = new Shape();
                    SKShape7.vertices = [[25,28],[28,25],[25,22],[22,25],];
                    SKShape7.inTangents = [[-1.6568540000000027,0],[0,1.6568540000000027],[1.6568540000000027,0],[0,-1.6568540000000027],];
                    SKShape7.outTangents = [[1.6568540000000027,0],[0,-1.6568540000000027],[-1.6568540000000027,0],[0,1.6568540000000027],];
                    SKShape7.closed = true;
            
                //绘制mask
                //draw mask
                var p1Mask1 = p1.Masks.addProperty("ADBE Mask Atom");
                    p1Mask1.property("ADBE Mask Shape").setValue(SKShape1);
                    p1Mask1.locked = true;
                var p1Mask2 = p1.Masks.addProperty("ADBE Mask Atom");
                    p1Mask2.property("ADBE Mask Shape").setValue(SKShape3);
                    p1Mask2.maskMode = MaskMode.SUBTRACT;
                    p1Mask2.locked = true;
                var p1Mask3 = p1.Masks.addProperty("ADBE Mask Atom");
                    p1Mask3.property("ADBE Mask Shape").setValue(SKShape5);
                    p1Mask3.locked = true;
                var p1Mask4 = p1.Masks.addProperty("ADBE Mask Atom");
                    p1Mask4.property("ADBE Mask Shape").setValue(SKShape7);
                    p1Mask4.maskMode = MaskMode.SUBTRACT;
                    p1Mask4.locked = true;
            
                //控制点2，直接复制控制点1然后改参数
                //dupilicata p1, change some patrameters
                var p2 = p1.duplicate();
                    p2.name = p2Name;
                    p2.comment = 'BX_PointB-' + i;
                    p2.transform.position.setValue([0.75*theComp.width,0.75*theComp.height]);
            
                //生成线框图层
                //drwa the frame layer
                var theFrame = theComp.layers.addShape();
                    theFrame.name = frameName;
                    theFrame.comment = 'BX_Frame-' + i;
                    theFrame.guideLayer = true;
                    theFrame.moveAfter(p1);
                    theFrame.transform.opacity.setValue(100);
                    theFrame.shy = true;
                    theComp.hideShyLayers = true;
                //绘制线框
                //draw frame rectagnle
                var shapeGroup1 = theFrame.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                var shapePathGroup1 = shapeGroup1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
                    shapePathGroup1.property("ADBE Vector Rect Size").expression = frameSizeExp;
                    shapeGroup1.property("ADBE Vector Transform Group").property("ADBE Vector Position").expression = framePosExp;
                    //shapeGroup1.property("ADBE Vector Transform Group").property("ADBE Vector Anchor").setValue([0,0]);
                    //shapeGroup1.property("ADBE Vector Transform Group").property("ADBE Vector Rotation").setValue(0);
                var shapeStroke1_0 = shapeGroup1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
                    shapeStroke1_0.enabled = 1;
                    shapeStroke1_0.blendMode.setValue(1);
                    shapeStroke1_0.property("ADBE Vector Stroke Width").setValue(1);
                    shapeStroke1_0.property("ADBE Vector Stroke Line Cap").setValue(1);
                    shapeStroke1_0.property("ADBE Vector Stroke Line Join").setValue(1);
                    shapeStroke1_0.property("ADBE Vector Stroke Opacity").setValue(100);
                    shapeStroke1_0.property("ADBE Vector Stroke Color").setValue([1,1,1]);
                    shapeStroke1_0.property("ADBE Vector Stroke Miter Limit").setValue(10);
                //绘制虚线
                //make dash
                var shapeStrokeDash1_0 = shapeStroke1_0.property("ADBE Vector Stroke Dashes");
                    shapeStrokeDash1_0.addProperty("ADBE Vector Stroke Dash 1");
                    shapeStrokeDash1_0.property("ADBE Vector Stroke Dash 1").setValue(10);
                    shapeStrokeDash1_0.addProperty("ADBE Vector Stroke Gap 1");
                    shapeStrokeDash1_0.property("ADBE Vector Stroke Gap 1").setValue(10);
            
                //生成标注文字
                //create label
                var labelX = theComp.layers.addText();
                    labelX.name = labelName;
                    labelX.comment = 'BX_LabelX-' + i;
                    labelX.guideLayer = true;
            
                var labelText = labelX.property("ADBE Text Properties").property("ADBE Text Document");
            
                    
                var labelTextSetting = labelText.value;
            
                var ifFailed = "error";
                    labelTextSetting.resetCharStyle();
                    labelTextSetting.fontSize = 18;
                    labelText.setValueAtTime(0,labelTextSetting);
                    labelTextSetting.fillColor = [1, 1, 1];
                    labelText.setValueAtTime(0,labelTextSetting);
                    // labelTextSetting.strokeColor = [0, 1, 0];
                    // labelTextSetting.strokeWidth = 2;
                    labelTextSetting.font = "Arial";
                    labelText.setValueAtTime(0,labelTextSetting);
                    // labelTextSetting.strokeOverFill = false;
                    // labelTextSetting.applyStroke = false;
                    labelTextSetting.applyFill = true;
                    labelText.setValueAtTime(0,labelTextSetting);
                    labelTextSetting.text = ifFailed;
                    labelText.setValueAtTime(0,labelTextSetting);
                    labelTextSetting.justification = ParagraphJustification.CENTER_JUSTIFY;
                    // labelTextSetting.tracking = 50;
                    labelText.setValueAtTime(0,labelTextSetting);
                    labelX.shy = true;
                
                //添加表达式
                //add expressions
                    p1.transform.position.expression = posExp;
                    p1.transform.scale.expression = sExp;
                    p1.transform.rotation.expression = rotExp;
                    p2.transform.position.expression = posExp;
                    p2.transform.scale.expression = sExp;
                    p2.transform.rotation.expression = rotExp;
                    labelX.transform.position.expression = labelExpX;
                    labelX.transform.scale.expression = labelSExp;
                    labelText.expression = labelExpTextX;

                //锁定线框图层
                //lock the layers
                    theFrame.locked = true;
                    labelX.locked = true;
                    labelX.selected = false;
                    theFrame.selected = false;
                    //p1.selected = true;
                    //p2.selected = true;
                app.endUndoGroup();
            }
			btn2.onClick = function(){
                var theComp = app.project.activeItem;  
				if(!app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY")){
					alert(CheckAccessTip);
					app.executeCommand(2359);
					return;
					}
				if((app.project.activeItem == null) || !(app.project.activeItem instanceof CompItem)){
						alert(alert1, scriptName + vs);
					}else{
                        function savePNG(theComp,theLocation) {
                            //if the resolution isnt 'Full', store current resolution and set to Full, then restore later;
                            var res = [1,1];
                            if(theComp.resolutionFactor != "1,1"){
                                res = theComp.resolutionFactor;
                                theComp.resolutionFactor = [1,1];
                                }
                            
                            if(theLocation != null){
                                //close the renderQueue panel
                                app.project.renderQueue.showWindow(false);
                                //show the correct charactar in the path
                                theLocation = decodeURIComponent(theLocation);
                                //backup the render queue status, then uncheck the queued items
                                var RQbackup = storeRenderQueue();
                                //check if renderQ rendering, if so,return "R".
                                if(RQbackup[RQbackup.length-1] == "rendering"){
                                    //**an option is to render through 'saveFrameToPng()': **
                                    //alert("Render Queue is rendering item, now export the png using saveFrameToPng().");
                                    //theComp.saveFrameToPng(0, theLocation);
                                    //*******************************************************
                                    return "R";
                                }else{
                                    //call command "save frame as" to add current frame to render queue
                                    theComp.openInViewer();
                                    app.executeCommand(2104);
                                    app.project.renderQueue.item(app.project.renderQueue.numItems).render = true;
                                    var templateTemp = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).templates;
                                    //call hidden template '_HIDDEN X-Factor 16 Premul', which exports png with alpha
                                    var setPNG = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).templates[templateTemp.length-1];
                                    app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).applyTemplate(setPNG);
                                    app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).file = new File(theLocation);
                                    var finalpath = app.project.renderQueue.item(app.project.renderQueue.numItems).outputModule(1).file.fsName;
                                    app.project.renderQueue.render();
                                    //remove the rendered item and restored the render queue items
                                    app.project.renderQueue.item(app.project.renderQueue.numItems).remove();
                                    if(RQbackup != null){
                                        restoreRenderQueue(RQbackup);					
                                    }
                                    app.activeViewer.setActive();
                                    app.project.activeItem.resolutionFactor = res;
                                }
                            }
                            //store the renderQ,return the index of active render items
                            function storeRenderQueue(){
                                var checkeds = [];
                                for(var p = 1;p <= app.project.renderQueue.numItems; p++){
                                    if (app.project.renderQueue.item(p).status == RQItemStatus.RENDERING){
                                        checkeds.push("rendering");
                                        break;
                                    }else if(app.project.renderQueue.item(p).status == RQItemStatus.QUEUED){
                                            checkeds.push(p);
                                            app.project.renderQueue.item(p).render = false;
                                    }
                                }
                                return checkeds;
                            }
                    
                            //restore the renderQ
                            function restoreRenderQueue(checkedItems){
                                for(var q = 0;q < checkedItems.length; q++){
                                    app.project.renderQueue.item(checkedItems[q]).render = true;
                                }
                            }
                        }  
                        var osSlash;
                        if($.os.toLowerCase().indexOf("mac") == 0){
                            osSlash = "/";
                        }else{
                            osSlash = "\\";
                        }
                        
                        var theLocation = File("~/Desktop/"+theComp.name+'_'+saveNameTip).saveDlg(savetip);

						var res = [1,1];
						if(app.project.activeItem.resolutionFactor != "1,1"){
							res = app.project.activeItem.resolutionFactor;
							app.project.activeItem.resolutionFactor = [1,1];
                            }

						if(theLocation!=null){
                            theLocation = decodeURIComponent(theLocation);
                            if(theLocation.substring(theLocation.lastIndexOf('.')+1,theLocation.length).toLowerCase() == "png"){
                                theLocation = theLocation.substring(0,theLocation.lastIndexOf('.'));
                                }
                            
                            var sliceExist = 0;
                            var whGroup = [];
                            var P1xyGroup = [];
                            var P2xyGroup = [];
                        
                            for(var j=0;j<theComp.layers.length;j++){
                                if(theComp.layer(j+1).comment.split('-')[0] == 'BX_Frame'){
                                    sliceExist++;
                                    var sliceWH = theComp.layer(j+1).property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Shape - Rect").property("ADBE Vector Rect Size").value;
                                    whGroup.push(sliceWH);
                                }
                                if(theComp.layer(j+1).comment.split('-')[0] == 'BX_PointA'){
                                    var sliceXY1 = theComp.layer(j+1).transform.position.value;
                                    P1xyGroup.push(sliceXY1);
                                }
                                if(theComp.layer(j+1).comment.split('-')[0] == 'BX_PointB'){
                                    var sliceXY2 = theComp.layer(j+1).transform.position.value;
                                    P2xyGroup.push(sliceXY2);
                                }
                            }
                        
                            if(sliceExist!=0){
                                var nowTime = theComp.time;
                                for(var k=0;k<whGroup.length;k++){
                                    var tempComp = app.project.items.addComp('TempComp',whGroup[k][0],whGroup[k][1],1,theComp.duration,1.0);
                                        //tempComp.openInViewer();
                                        tempComp.layers.add(theComp);
                                        tempComp.time = nowTime;
                                    var newX = 0.5*(theComp.width + whGroup[k][0] - P1xyGroup[k][0] - P2xyGroup[k][0]);
                                    var newY = 0.5*(theComp.height + whGroup[k][1] - P1xyGroup[k][1] - P2xyGroup[k][1]);
                                    tempComp.layer(1).transform.position.setValue([newX,newY]);
                                    theLocation = theLocation + osSlash;
                                    var sliceFolder = new Folder(theLocation);
                                        sliceFolder.create();
                                    var sliceLocation = theLocation + theComp.name + '_' + k;
                                    if(savePNG(tempComp,sliceLocation) == "R"){
                                        alert(RQerr);
                                        break;
                                    }
                                    theComp.openInViewer();
                                    tempComp.remove();
                                }
                        
                            }else{
                                theLocation = theLocation + osSlash;
                                var sliceFolder = new Folder(theLocation);
                                    sliceFolder.create();
                                var sliceLocation = theLocation + theComp.name;
                                if(savePNG(theComp,sliceLocation) == "R"){
                                    alert(RQerr);
                                }
                            }
                        
                            //打开保存位置
                            //open folder
                                if(os == "mac"){
                                    alert(endmsg + theLocation.substring(0,theLocation.lastIndexOf('/')-1));
                                }else{
                                    alert(endmsg + theLocation.substring(0,theLocation.lastIndexOf(osSlash)));
                                }
                                var finalpath = theLocation.substring(0,theLocation.lastIndexOf(osSlash)+1);
                                var openFolder = new Folder(finalpath);
                                openFolder.execute();
							}
						}

					}
				

            btn3.onClick = function(){
                app.beginUndoGroup("ClearSlice");
                var theComp = app.project.activeItem;  
                var tempLayer = [];
                for(var j=theComp.layers.length;j>0;j--){
                    var keyWord = theComp.layer(j).comment.split('-')[0];
                    if(keyWord == 'BX_Frame' || keyWord == 'BX_PointA' || keyWord == 'BX_PointB' || keyWord =='BX_LabelX'){
                        theComp.layer(j).locked = false;
                        tempLayer.push(theComp.layer(j));
                    }
                }
                for(var i=0;i<tempLayer.length;i++){
                    tempLayer[i].remove();
                }
                app.endUndoGroup();

            }
            btn4.onClick = function(){
                var helpPal = new Window("dialog",scriptName + vs + ' Help',undefined);
                var helpView = helpPal.add("edittext",undefined,helpText,{readonly:1,noecho:0,borderless:1,multiline:1,enterKeySignalsOnChange:0});
                    hGrp = helpPal.add('group');
                    btn11 = hGrp.add("button",undefined,'Close');
                    btn12 = hGrp.add('button',undefined,'More...');
                    btn11.onClick = function(){
                        helpPal.close();
                    }
                    btn12.onClick = function(){
                        if(os == "mac"){
                            system.callSystem("Open" + " " + "https://github.com/bigxixi/AE-Slicer/");
                        }else{
                            system.callSystem("cmd.exe /c" + "\"Start https://github.com/bigxixi/AE-Slicer/\"");
                        }
                    }
                    helpPal.show();
            }

	}else{
			alert(scriptNotRun);
		}
		return win;
	}
})(this)



