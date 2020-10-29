!function(){function b(b,t){if(!(b instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CfhG:function(t,e,c){"use strict";c.r(e),c.d(e,"DocumentationModule",(function(){return s}));var n,m,a=c("2kYt"),o=c("sEIs"),d=c("PCNd"),N=c("EM62"),M=c("aZ8m"),r=[{path:"",component:(n=function t(){b(this,t)},n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=N.Cb({type:n,selectors:[["demo"]],decls:1408,vars:16,consts:[["tagline","Documentation"],[1,"main-content"],["id","documentation","href","#documentation","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","inputs","href","#configuration","aria-hidden","true",1,"anchor"],[1,"highlight"],["id","configuration","href","#configuration","aria-hidden","true",1,"anchor"],[1,"section"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts",1,"source"],[1,"nested-obj"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filters.component.ts",1,"source"],["id","events","href","#events","aria-hidden","true",1,"anchor"],["id","source-method","href","#source-method","aria-hidden","true",1,"anchor"],[1,"string"]],template:function(b,t){if(1&b){N.Jb(0,"header-component",0),N.Nb(1,"section",1),N.Nb(2,"h2"),N.Nb(3,"a",2),N.Jb(4,"span",3),N.Mb(),N.mc(5,"Documentation"),N.Mb(),N.Nb(6,"h3"),N.Nb(7,"a",4),N.Jb(8,"span",3),N.Mb(),N.mc(9,"Component Inputs"),N.Mb(),N.Nb(10,"table"),N.Nb(11,"tr"),N.Nb(12,"th"),N.mc(13,"Input"),N.Mb(),N.Nb(14,"th"),N.mc(15,"Type"),N.Mb(),N.Nb(16,"th"),N.mc(17,"Description"),N.Mb(),N.Mb(),N.Nb(18,"tr"),N.Nb(19,"td"),N.mc(20,"[settings]"),N.Mb(),N.Nb(21,"td"),N.Nb(22,"span",5),N.mc(23,"Object"),N.Mb(),N.Mb(),N.Nb(24,"td"),N.mc(25,"Table component configuration object, properties described below"),N.Mb(),N.Mb(),N.Nb(26,"tr"),N.Nb(27,"td"),N.mc(28,"[source]"),N.Mb(),N.Nb(29,"td"),N.Nb(30,"span",5),N.mc(31,"Array"),N.Mb(),N.mc(32,"|"),N.Nb(33,"span",5),N.mc(34,"DataSource"),N.Mb(),N.Mb(),N.Nb(35,"td"),N.mc(36,"Table data, either an array or DataSource object (LocalDataSource currently supported)"),N.Mb(),N.Mb(),N.Mb(),N.Nb(37,"h3"),N.Nb(38,"a",6),N.Jb(39,"span",3),N.Mb(),N.mc(40,"Table Configuration"),N.Mb(),N.Nb(41,"table"),N.Nb(42,"tr"),N.Nb(43,"th"),N.mc(44,"Property"),N.Mb(),N.Nb(45,"th"),N.mc(46,"Type"),N.Mb(),N.Nb(47,"th"),N.mc(48,"Default"),N.Mb(),N.Nb(49,"th"),N.mc(50,"Description"),N.Mb(),N.Mb(),N.Nb(51,"tr",7),N.Nb(52,"td"),N.mc(53,"Required Table Settings"),N.Mb(),N.Jb(54,"td"),N.Jb(55,"td"),N.Jb(56,"td"),N.Mb(),N.Nb(57,"tr"),N.Nb(58,"td"),N.mc(59,"columns"),N.Mb(),N.Nb(60,"td"),N.Nb(61,"span",5),N.mc(62,"Object"),N.Mb(),N.Mb(),N.Nb(63,"td"),N.mc(64,"n/a"),N.Mb(),N.Nb(65,"td"),N.mc(66," Table column settings, by default an empty object."),N.Jb(67,"br"),N.mc(68," Example format:"),N.Jb(69,"br"),N.Nb(70,"code"),N.mc(71),N.Nb(72,"b"),N.mc(73,"columnKey"),N.Mb(),N.mc(74),N.Mb(),N.Jb(75,"br"),N.mc(76," Please note, "),N.Nb(77,"b"),N.mc(78,"columnKey"),N.Mb(),N.mc(79," must be the same as a key in data array objects. "),N.Mb(),N.Mb(),N.Nb(80,"tr",7),N.Nb(81,"td"),N.mc(82,"Column Settings"),N.Mb(),N.Jb(83,"td"),N.Jb(84,"td"),N.Nb(85,"td"),N.mc(86," List of a column's settings "),N.Mb(),N.Mb(),N.Nb(87,"tr"),N.Nb(88,"td"),N.mc(89,"title"),N.Mb(),N.Nb(90,"td"),N.Nb(91,"span",5),N.mc(92,"string"),N.Mb(),N.Mb(),N.Nb(93,"td"),N.mc(94,"''"),N.Mb(),N.Nb(95,"td"),N.mc(96," Column title "),N.Mb(),N.Mb(),N.Nb(97,"tr"),N.Nb(98,"td"),N.mc(99,"class"),N.Mb(),N.Nb(100,"td"),N.Nb(101,"span",5),N.mc(102,"string"),N.Mb(),N.Mb(),N.Nb(103,"td"),N.mc(104,"''"),N.Mb(),N.Nb(105,"td"),N.mc(106," Column class "),N.Mb(),N.Mb(),N.Nb(107,"tr"),N.Nb(108,"td"),N.mc(109,"width"),N.Mb(),N.Nb(110,"td"),N.Nb(111,"span",5),N.mc(112,"string"),N.Mb(),N.Mb(),N.Nb(113,"td"),N.mc(114,"''"),N.Mb(),N.Nb(115,"td"),N.mc(116," Column width, example: "),N.Nb(117,"span",5),N.mc(118,"'20px'"),N.Mb(),N.mc(119,", "),N.Nb(120,"span",5),N.mc(121,"'20%'"),N.Mb(),N.Mb(),N.Mb(),N.Nb(122,"tr"),N.Nb(123,"td"),N.mc(124,"hide"),N.Mb(),N.Nb(125,"td"),N.Nb(126,"span",5),N.mc(127,"boolean"),N.Mb(),N.Mb(),N.Nb(128,"td"),N.mc(129,"false"),N.Mb(),N.Nb(130,"td"),N.mc(131," Whether to hide this column or not "),N.Mb(),N.Mb(),N.Nb(132,"tr"),N.Nb(133,"td"),N.mc(134,"editable"),N.Mb(),N.Nb(135,"td"),N.Nb(136,"span",5),N.mc(137,"boolean"),N.Mb(),N.Mb(),N.Nb(138,"td"),N.mc(139,"true"),N.Mb(),N.Nb(140,"td"),N.mc(141," Whether this column is editable or not "),N.Mb(),N.Mb(),N.Nb(142,"tr"),N.Nb(143,"td"),N.mc(144,"type"),N.Mb(),N.Nb(145,"td"),N.Nb(146,"span",5),N.mc(147,"'text'"),N.Mb(),N.mc(148,"|"),N.Nb(149,"span",5),N.mc(150,"'html'"),N.Mb(),N.mc(151,"|"),N.Nb(152,"span",5),N.mc(153,"'custom'"),N.Mb(),N.Mb(),N.Nb(154,"td"),N.mc(155,"'text'"),N.Mb(),N.Nb(156,"td"),N.mc(157," If type is "),N.Nb(158,"span",5),N.mc(159,"text"),N.Mb(),N.mc(160," then cell value will be inserted as text."),N.Jb(161,"br"),N.mc(162," If type is "),N.Nb(163,"span",5),N.mc(164,"html"),N.Mb(),N.mc(165," then cell value will be inserted as html."),N.Jb(166,"br"),N.mc(167," If type is "),N.Nb(168,"span",5),N.mc(169,"custom"),N.Mb(),N.mc(170," the "),N.Nb(171,"code"),N.mc(172,"renderComponent"),N.Mb(),N.mc(173," property must be defined. "),N.Mb(),N.Mb(),N.Nb(174,"tr"),N.Nb(175,"td"),N.mc(176,"renderComponent"),N.Mb(),N.Nb(177,"td"),N.Nb(178,"span",5),N.mc(179,"any"),N.Mb(),N.Mb(),N.Nb(180,"td"),N.mc(181,"null"),N.Mb(),N.Nb(182,"td"),N.mc(183," Custom component that will be responsible for rendering the cell content while in view mode."),N.Jb(184,"br"),N.mc(185," Type must be "),N.Nb(186,"span",5),N.mc(187,"custom"),N.Mb(),N.mc(188," in order for this to work."),N.Jb(189,"br"),N.mc(190," You can see an "),N.Nb(191,"a",8),N.mc(192,"example here"),N.Mb(),N.Mb(),N.Mb(),N.Nb(193,"tr"),N.Nb(194,"td"),N.mc(195,"onComponentInitFunction"),N.Mb(),N.Nb(196,"td"),N.Nb(197,"span",5),N.mc(198,"Function"),N.Mb(),N.Mb(),N.Nb(199,"td"),N.mc(200,"null"),N.Mb(),N.Nb(201,"td"),N.mc(202," Function which will be invoked after "),N.Nb(203,"span",5),N.mc(204,"renderComponent"),N.Mb(),N.mc(205," instantiated and before ngOnInit hook. This function gets "),N.Nb(206,"span",5),N.mc(207,"renderComponent"),N.Mb(),N.mc(208," instance in first param. "),N.Mb(),N.Mb(),N.Nb(209,"tr"),N.Nb(210,"td"),N.mc(211,"editor"),N.Mb(),N.Nb(212,"td"),N.Nb(213,"span",5),N.mc(214,"Object"),N.Mb(),N.Mb(),N.Nb(215,"td"),N.mc(216,"n/a"),N.Mb(),N.Nb(217,"td"),N.mc(218," Editor attributes settings "),N.Mb(),N.Mb(),N.Nb(219,"tr"),N.Nb(220,"td"),N.Nb(221,"span",9),N.mc(222,"editor"),N.Mb(),N.mc(223,".type"),N.Mb(),N.Nb(224,"td"),N.Nb(225,"span",5),N.mc(226,"'text' | 'textarea' | 'completer' | 'list' | 'checkbox'"),N.Mb(),N.Mb(),N.Nb(227,"td"),N.mc(228,"'text'"),N.Mb(),N.Nb(229,"td"),N.mc(230," Editor used when new row is added or edited "),N.Mb(),N.Mb(),N.Nb(231,"tr"),N.Nb(232,"td"),N.Nb(233,"span",9),N.mc(234,"editor"),N.Mb(),N.mc(235,".config"),N.Mb(),N.Nb(236,"td"),N.Nb(237,"span",5),N.mc(238,"Object"),N.Mb(),N.Mb(),N.Nb(239,"td"),N.mc(240,"n/a"),N.Mb(),N.Nb(241,"td"),N.mc(242," Editor configuration settings. Mandatory only for editor types "),N.Nb(243,"span",5),N.mc(244,"completer"),N.Mb(),N.mc(245,", "),N.Nb(246,"span",5),N.mc(247,"list"),N.Mb(),N.Mb(),N.Mb(),N.Nb(248,"tr"),N.Nb(249,"td"),N.Nb(250,"span",9),N.mc(251,"editor.config"),N.Mb(),N.mc(252,".true"),N.Mb(),N.Nb(253,"td"),N.Nb(254,"span",5),N.mc(255,"string"),N.Mb(),N.Mb(),N.Nb(256,"td"),N.mc(257,"''"),N.Mb(),N.Nb(258,"td"),N.mc(259," Only on "),N.Nb(260,"span",5),N.mc(261,"checkbox"),N.Mb(),N.mc(262," type."),N.Jb(263,"br"),N.mc(264," Defines the value to assign when the checkbox is checked. This parameter is optional, if omitted, "),N.Nb(265,"code"),N.mc(266,"true"),N.Mb(),N.mc(267," will be used. "),N.Mb(),N.Mb(),N.Nb(268,"tr"),N.Nb(269,"td"),N.Nb(270,"span",9),N.mc(271,"editor.config"),N.Mb(),N.mc(272,".false"),N.Mb(),N.Nb(273,"td"),N.Nb(274,"span",5),N.mc(275,"string"),N.Mb(),N.Mb(),N.Nb(276,"td"),N.mc(277,"''"),N.Mb(),N.Nb(278,"td"),N.mc(279," Only on "),N.Nb(280,"span",5),N.mc(281,"checkbox"),N.Mb(),N.mc(282," type."),N.Jb(283,"br"),N.mc(284," Defines the value to assign when the checkbox is not checked. This parameter is optional, if omitted, "),N.Nb(285,"code"),N.mc(286,"false"),N.Mb(),N.mc(287," will be used. "),N.Mb(),N.Mb(),N.Nb(288,"tr"),N.Nb(289,"td"),N.Nb(290,"span",9),N.mc(291,"editor.config"),N.Mb(),N.mc(292,".list"),N.Mb(),N.Nb(293,"td"),N.Nb(294,"span",5),N.mc(295,"Array"),N.Mb(),N.Mb(),N.Nb(296,"td"),N.mc(297,"[ ]"),N.Mb(),N.Nb(298,"td"),N.mc(299," Only on "),N.Nb(300,"span",5),N.mc(301,"list"),N.Mb(),N.mc(302," type. Example format:"),N.Jb(303,"br"),N.Nb(304,"code"),N.mc(305),N.Mb(),N.Jb(306,"br"),N.mc(307," Html is supported if column type is "),N.Nb(308,"span",5),N.mc(309,"'html'"),N.Mb(),N.Mb(),N.Mb(),N.Nb(310,"tr"),N.Nb(311,"td"),N.Nb(312,"span",9),N.mc(313,"editor.config"),N.Mb(),N.mc(314,".completer"),N.Mb(),N.Nb(315,"td"),N.Nb(316,"span",5),N.mc(317,"Object"),N.Mb(),N.Mb(),N.Nb(318,"td"),N.mc(319,"n/a"),N.Mb(),N.Nb(320,"td"),N.mc(321," Only on "),N.Nb(322,"span",5),N.mc(323,"completer"),N.Mb(),N.mc(324," type. Example format:"),N.Jb(325,"br"),N.mc(326," Completer configuration settings "),N.Mb(),N.Mb(),N.Nb(327,"tr"),N.Nb(328,"td"),N.Nb(329,"span",9),N.mc(330,"editor.config.completer"),N.Mb(),N.mc(331,".data"),N.Mb(),N.Nb(332,"td"),N.Nb(333,"span",5),N.mc(334,"Array"),N.Mb(),N.Mb(),N.Nb(335,"td"),N.mc(336,"[ ]"),N.Mb(),N.Nb(337,"td"),N.mc(338," Autocomplete list data source."),N.Jb(339,"br"),N.mc(340," Example format:"),N.Jb(341,"br"),N.Nb(342,"code"),N.mc(343),N.Mb(),N.Mb(),N.Mb(),N.Nb(344,"tr"),N.Nb(345,"td"),N.Nb(346,"span",9),N.mc(347,"editor.config.completer"),N.Mb(),N.mc(348,".searchFields"),N.Mb(),N.Nb(349,"td"),N.Nb(350,"span",5),N.mc(351,"string"),N.Mb(),N.Mb(),N.Nb(352,"td"),N.mc(353,"''"),N.Mb(),N.Nb(354,"td"),N.mc(355," Comma separated list of fields to search on. Fields may contain dots for nested attributes; if empty or null all data will be returned "),N.Mb(),N.Mb(),N.Nb(356,"tr"),N.Nb(357,"td"),N.Nb(358,"span",9),N.mc(359,"editor.config.completer"),N.Mb(),N.mc(360,".titleField"),N.Mb(),N.Nb(361,"td"),N.Nb(362,"span",5),N.mc(363,"string"),N.Mb(),N.Mb(),N.Nb(364,"td"),N.mc(365,"''"),N.Mb(),N.Nb(366,"td"),N.mc(367," Name of the field to use as title for the list item "),N.Mb(),N.Mb(),N.Nb(368,"tr"),N.Nb(369,"td"),N.Nb(370,"span",9),N.mc(371,"editor.config.completer"),N.Mb(),N.mc(372,".descriptionField"),N.Mb(),N.Nb(373,"td"),N.Nb(374,"span",5),N.mc(375,"string"),N.Mb(),N.Mb(),N.Nb(376,"td"),N.mc(377,"''"),N.Mb(),N.Nb(378,"td"),N.mc(379," Name of the field to use as description for the list item "),N.Mb(),N.Mb(),N.Nb(380,"tr"),N.Nb(381,"td"),N.mc(382,"filter"),N.Mb(),N.Nb(383,"td"),N.Nb(384,"span",5),N.mc(385,"Object"),N.Mb(),N.Mb(),N.Nb(386,"td"),N.mc(387,"n/a"),N.Mb(),N.Nb(388,"td"),N.mc(389," Column filter attributes settings. This object accepts the same properties as the "),N.Nb(390,"code"),N.mc(391,"editor"),N.Mb(),N.mc(392," object."),N.Jb(393,"br"),N.mc(394," The available types are: "),N.Nb(395,"code"),N.mc(396,"checkbox"),N.Mb(),N.mc(397,", "),N.Nb(398,"code"),N.mc(399,"select"),N.Mb(),N.mc(400,", "),N.Nb(401,"code"),N.mc(402,"completer"),N.Mb(),N.mc(403,"."),N.Jb(404,"br"),N.mc(405," The "),N.Nb(406,"code"),N.mc(407,"checkbox"),N.Mb(),N.mc(408," type accepts one more optional property compared to the "),N.Nb(409,"code"),N.mc(410,"editor"),N.Mb(),N.mc(411," version: "),N.Nb(412,"span",5),N.mc(413,"resetText: string"),N.Mb(),N.mc(414,". It defines the text of the button to reset the checkbox selection."),N.Jb(415,"br"),N.Nb(416,"a",10),N.mc(417,"Click here to see an example"),N.Mb(),N.mc(418," on how to configure it. "),N.Mb(),N.Mb(),N.Nb(419,"tr"),N.Nb(420,"td"),N.mc(421,"valuePrepareFunction"),N.Mb(),N.Nb(422,"td"),N.Nb(423,"span",5),N.mc(424,"Function"),N.Mb(),N.Mb(),N.Nb(425,"td"),N.mc(426," n/a "),N.Mb(),N.Nb(427,"td"),N.mc(428," Function run against a value before it gets inserted into a cell. You can use it to modify how a value is displayed in the cell. "),N.Jb(429,"br"),N.mc(430," This function will be invoked with 2 parameters: cell, row "),N.Mb(),N.Mb(),N.Nb(431,"tr"),N.Nb(432,"td"),N.mc(433,"sort"),N.Mb(),N.Nb(434,"td"),N.Nb(435,"span",5),N.mc(436,"boolean"),N.Mb(),N.Mb(),N.Nb(437,"td"),N.mc(438,"true"),N.Mb(),N.Nb(439,"td"),N.mc(440," Column sort settings, enable/disable. "),N.Mb(),N.Mb(),N.Nb(441,"tr"),N.Nb(442,"td"),N.mc(443,"sortDirection"),N.Mb(),N.Nb(444,"td"),N.Nb(445,"span",5),N.mc(446,"'asc'|'desc'"),N.Mb(),N.Mb(),N.Nb(447,"td"),N.mc(448,"n/a"),N.Mb(),N.Nb(449,"td"),N.mc(450," Sort table by this column with this direction by default."),N.Jb(451,"br"),N.mc(452," Applied only when "),N.Nb(453,"span",5),N.mc(454,"sort"),N.Mb(),N.mc(455," = true. Note: multiple sort option is not supported yet, so sortDirection can be applied to only one column per table. "),N.Mb(),N.Mb(),N.Nb(456,"tr"),N.Nb(457,"td"),N.mc(458,"compareFunction"),N.Mb(),N.Nb(459,"td"),N.Nb(460,"span",5),N.mc(461,"Function"),N.Mb(),N.Mb(),N.Nb(462,"td"),N.mc(463," n/a "),N.Mb(),N.Nb(464,"td"),N.mc(465," Function run against the values to sort the table "),N.Mb(),N.Mb(),N.Nb(466,"tr"),N.Nb(467,"td"),N.mc(468,"filter"),N.Mb(),N.Nb(469,"td"),N.Nb(470,"span",5),N.mc(471,"boolean"),N.Mb(),N.Mb(),N.Nb(472,"td"),N.mc(473,"true"),N.Mb(),N.Nb(474,"td"),N.mc(475," Column filter settings, enable/disable "),N.Mb(),N.Mb(),N.Nb(476,"tr"),N.Nb(477,"td"),N.mc(478,"filterFunction"),N.Mb(),N.Nb(479,"td"),N.Nb(480,"span",5),N.mc(481,"Function"),N.Mb(),N.Mb(),N.Nb(482,"td"),N.mc(483,"n/a"),N.Mb(),N.Nb(484,"td"),N.mc(485," Function run against the column value when filtering is happening "),N.Mb(),N.Mb(),N.Nb(486,"tr",7),N.Nb(487,"td"),N.mc(488,"Other Table Settings"),N.Mb(),N.Jb(489,"td"),N.Jb(490,"td"),N.Jb(491,"td"),N.Mb(),N.Nb(492,"tr"),N.Nb(493,"td"),N.mc(494,"mode"),N.Mb(),N.Nb(495,"td"),N.Nb(496,"span",5),N.mc(497,"'external'"),N.Mb(),N.mc(498,"|"),N.Nb(499,"span",5),N.mc(500,"'inline'"),N.Mb(),N.Mb(),N.Nb(501,"td"),N.mc(502,"'inline'"),N.Mb(),N.Nb(503,"td"),N.mc(504," Determines how to react on action links (Add, Edit, Delete)."),N.Jb(505,"br"),N.Nb(506,"span",5),N.mc(507,"'external'"),N.Mb(),N.mc(508," - just trigger the events (LINK HERE)."),N.Jb(509,"br"),N.Nb(510,"span",5),N.mc(511,"'inline'"),N.Mb(),N.mc(512," - process internally, show forms/inputs/etc"),N.Jb(513,"br"),N.Mb(),N.Mb(),N.Nb(514,"tr"),N.Nb(515,"td"),N.mc(516,"hideHeader"),N.Mb(),N.Nb(517,"td"),N.Nb(518,"span",5),N.mc(519,"'boolean'"),N.Mb(),N.Mb(),N.Nb(520,"td"),N.mc(521,"false"),N.Mb(),N.Nb(522,"td"),N.mc(523," Set to true to not display the table header (which includes table column titles) "),N.Mb(),N.Mb(),N.Nb(524,"tr"),N.Nb(525,"td"),N.mc(526,"hideSubHeader"),N.Mb(),N.Nb(527,"td"),N.Nb(528,"span",5),N.mc(529,"'boolean'"),N.Mb(),N.Mb(),N.Nb(530,"td"),N.mc(531,"false"),N.Mb(),N.Nb(532,"td"),N.mc(533," Set to true to not display the table sub-header (which includes filters and global table actions (currently - Add action)) "),N.Mb(),N.Mb(),N.Nb(534,"tr"),N.Nb(535,"td"),N.mc(536,"noDataMessage"),N.Mb();N.Nb(537,"td"),N.Nb(538,"span",5),N.mc(539,"string"),N.Mb(),N.Mb(),N.Nb(540,"td"),N.mc(541,"'No data found'"),N.Mb(),N.Nb(542,"td"),N.mc(543," Message shown when there is no data in the table "),N.Mb(),N.Mb(),N.Nb(544,"tr"),N.Nb(545,"td"),N.mc(546,"attr"),N.Mb(),N.Nb(547,"td"),N.Nb(548,"span",5),N.mc(549,"Object"),N.Mb(),N.Mb(),N.Nb(550,"td"),N.mc(551,"n/a"),N.Mb(),N.Nb(552,"td"),N.mc(553," Table attributes settings "),N.Mb(),N.Mb(),N.Nb(554,"tr"),N.Nb(555,"td"),N.mc(556,"attr.id"),N.Mb(),N.Nb(557,"td"),N.Nb(558,"span",5),N.mc(559,"string"),N.Mb(),N.Mb(),N.Nb(560,"td"),N.mc(561,"''"),N.Mb(),N.Nb(562,"td"),N.mc(563," Table element id "),N.Mb(),N.Mb(),N.Nb(564,"tr"),N.Nb(565,"td"),N.mc(566,"attr.class"),N.Mb(),N.Nb(567,"td"),N.Nb(568,"span",5),N.mc(569,"string"),N.Mb(),N.Mb(),N.Nb(570,"td"),N.mc(571,"''"),N.Mb(),N.Nb(572,"td"),N.mc(573," Table element class "),N.Mb(),N.Mb(),N.Nb(574,"tr"),N.Nb(575,"td"),N.mc(576,"actions"),N.Mb(),N.Nb(577,"td"),N.Nb(578,"span",5),N.mc(579,"Object"),N.Mb(),N.Mb(),N.Nb(580,"td"),N.mc(581,"n/a"),N.Mb(),N.Nb(582,"td"),N.mc(583," Settings for the table actions "),N.Mb(),N.Mb(),N.Nb(584,"tr"),N.Nb(585,"td"),N.mc(586,"actions.columnTitle"),N.Mb(),N.Nb(587,"td"),N.Nb(588,"span",5),N.mc(589,"string"),N.Mb(),N.Mb(),N.Nb(590,"td"),N.mc(591,"'Actions'"),N.Mb(),N.Nb(592,"td"),N.mc(593," Actions column title "),N.Mb(),N.Mb(),N.Nb(594,"tr"),N.Nb(595,"td"),N.mc(596,"actions.add"),N.Mb(),N.Nb(597,"td"),N.Nb(598,"span",5),N.mc(599,"boolean"),N.Mb(),N.Mb(),N.Nb(600,"td"),N.mc(601,"true"),N.Mb(),N.Nb(602,"td"),N.mc(603," Show/not show Add button "),N.Mb(),N.Mb(),N.Nb(604,"tr"),N.Nb(605,"td"),N.mc(606,"actions.edit"),N.Mb(),N.Nb(607,"td"),N.Nb(608,"span",5),N.mc(609,"boolean"),N.Mb(),N.Mb(),N.Nb(610,"td"),N.mc(611,"true"),N.Mb(),N.Nb(612,"td"),N.mc(613," Show/not show Edit button "),N.Mb(),N.Mb(),N.Nb(614,"tr"),N.Nb(615,"td"),N.mc(616,"actions.delete"),N.Mb(),N.Nb(617,"td"),N.Nb(618,"span",5),N.mc(619,"boolean"),N.Mb(),N.Mb(),N.Nb(620,"td"),N.mc(621,"true"),N.Mb(),N.Nb(622,"td"),N.mc(623," Show/not show Delete button "),N.Mb(),N.Mb(),N.Nb(624,"tr"),N.Nb(625,"td"),N.mc(626,"actions.position"),N.Mb(),N.Nb(627,"td"),N.Nb(628,"span",5),N.mc(629,"'left'"),N.Mb(),N.mc(630,"|"),N.Nb(631,"span",5),N.mc(632,"'right'"),N.Mb(),N.Mb(),N.Nb(633,"td"),N.mc(634,"'left'"),N.Mb(),N.Nb(635,"td"),N.mc(636," Choose actions column position "),N.Mb(),N.Mb(),N.Nb(637,"tr"),N.Nb(638,"td"),N.mc(639,"filter"),N.Mb(),N.Nb(640,"td"),N.Nb(641,"span",5),N.mc(642,"Object"),N.Mb(),N.Mb(),N.Nb(643,"td"),N.mc(644,"n/a"),N.Mb(),N.Nb(645,"td"),N.mc(646," Settings for the table filter "),N.Mb(),N.Mb(),N.Nb(647,"tr"),N.Nb(648,"td"),N.mc(649,"filter.inputClass"),N.Mb(),N.Nb(650,"td"),N.Nb(651,"span",5),N.mc(652,"string"),N.Mb(),N.Mb(),N.Nb(653,"td"),N.mc(654,"''"),N.Mb(),N.Nb(655,"td"),N.mc(656," Filter input class "),N.Mb(),N.Mb(),N.Nb(657,"tr"),N.Nb(658,"td"),N.mc(659,"edit"),N.Mb(),N.Nb(660,"td"),N.Nb(661,"span",5),N.mc(662,"Object"),N.Mb(),N.Mb(),N.Nb(663,"td"),N.mc(664,"n/a"),N.Mb(),N.Nb(665,"td"),N.mc(666," Edit action settings "),N.Mb(),N.Mb(),N.Nb(667,"tr"),N.Nb(668,"td"),N.mc(669,"edit.inputClass"),N.Mb(),N.Nb(670,"td"),N.Nb(671,"span",5),N.mc(672,"string"),N.Mb(),N.Mb(),N.Nb(673,"td"),N.mc(674,"''"),N.Mb(),N.Nb(675,"td"),N.mc(676," Editing form input class "),N.Mb(),N.Mb(),N.Nb(677,"tr"),N.Nb(678,"td"),N.mc(679,"edit.editButtonContent"),N.Mb(),N.Nb(680,"td"),N.Nb(681,"span",5),N.mc(682,"string"),N.Mb(),N.Mb(),N.Nb(683,"td"),N.mc(684,"'Edit'"),N.Mb(),N.Nb(685,"td"),N.mc(686," Edit row button content/title "),N.Mb(),N.Mb(),N.Nb(687,"tr"),N.Nb(688,"td"),N.mc(689,"edit.saveButtonContent"),N.Mb(),N.Nb(690,"td"),N.Nb(691,"span",5),N.mc(692,"string"),N.Mb(),N.Mb(),N.Nb(693,"td"),N.mc(694,"'Update'"),N.Mb(),N.Nb(695,"td"),N.mc(696," Update button content/title "),N.Mb(),N.Mb(),N.Nb(697,"tr"),N.Nb(698,"td"),N.mc(699,"edit.cancelButtonContent"),N.Mb(),N.Nb(700,"td"),N.Nb(701,"span",5),N.mc(702,"string"),N.Mb(),N.Mb(),N.Nb(703,"td"),N.mc(704,"'Cancel'"),N.Mb(),N.Nb(705,"td"),N.mc(706," Cancel button content/title "),N.Mb(),N.Mb(),N.Nb(707,"tr"),N.Nb(708,"td"),N.mc(709,"edit.confirmSave"),N.Mb(),N.Nb(710,"td"),N.Nb(711,"span",5),N.mc(712,"boolean"),N.Mb(),N.Mb(),N.Nb(713,"td"),N.mc(714,"false"),N.Mb(),N.Nb(715,"td"),N.mc(716," Enable/disable "),N.Nb(717,"span",5),N.mc(718,"(confirmEdit)"),N.Mb(),N.mc(719," event. If enabled data will be edited only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(720,"tr"),N.Nb(721,"td"),N.mc(722,"add"),N.Mb(),N.Nb(723,"td"),N.Nb(724,"span",5),N.mc(725,"Object"),N.Mb(),N.Mb(),N.Nb(726,"td"),N.mc(727,"n/a"),N.Mb(),N.Nb(728,"td"),N.mc(729," Add action settings "),N.Mb(),N.Mb(),N.Nb(730,"tr"),N.Nb(731,"td"),N.mc(732,"add.inputClass"),N.Mb(),N.Nb(733,"td"),N.Nb(734,"span",5),N.mc(735,"string"),N.Mb(),N.Mb(),N.Nb(736,"td"),N.mc(737,"''"),N.Mb(),N.Nb(738,"td"),N.mc(739," New row input class "),N.Mb(),N.Mb(),N.Nb(740,"tr"),N.Nb(741,"td"),N.mc(742,"add.addButtonContent"),N.Mb(),N.Nb(743,"td"),N.Nb(744,"span",5),N.mc(745,"string"),N.Mb(),N.Mb(),N.Nb(746,"td"),N.mc(747,"'Add New'"),N.Mb(),N.Nb(748,"td"),N.mc(749," Add New button content/title "),N.Mb(),N.Mb(),N.Nb(750,"tr"),N.Nb(751,"td"),N.mc(752,"add.createButtonContent"),N.Mb(),N.Nb(753,"td"),N.Nb(754,"span",5),N.mc(755,"string"),N.Mb(),N.Mb(),N.Nb(756,"td"),N.mc(757,"'Create'"),N.Mb(),N.Nb(758,"td"),N.mc(759," Create button content/title "),N.Mb(),N.Mb(),N.Nb(760,"tr"),N.Nb(761,"td"),N.mc(762,"add.cancelButtonContent"),N.Mb(),N.Nb(763,"td"),N.Nb(764,"span",5),N.mc(765,"string"),N.Mb(),N.Mb(),N.Nb(766,"td"),N.mc(767,"'Cancel'"),N.Mb(),N.Nb(768,"td"),N.mc(769," Cancel button content/title "),N.Mb(),N.Mb(),N.Nb(770,"tr"),N.Nb(771,"td"),N.mc(772,"add.confirmCreate"),N.Mb(),N.Nb(773,"td"),N.Nb(774,"span",5),N.mc(775,"boolean"),N.Mb(),N.Mb(),N.Nb(776,"td"),N.mc(777,"false"),N.Mb(),N.Nb(778,"td"),N.mc(779," Enable/disable "),N.Nb(780,"span",5),N.mc(781,"(confirmCreate)"),N.Mb(),N.mc(782," event. If enabled data will be added only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(783,"tr"),N.Nb(784,"td"),N.mc(785,"delete"),N.Mb(),N.Nb(786,"td"),N.Nb(787,"span",5),N.mc(788,"Object"),N.Mb(),N.Mb(),N.Nb(789,"td"),N.mc(790,"n/a"),N.Mb(),N.Nb(791,"td"),N.mc(792," Delete action settings "),N.Mb(),N.Mb(),N.Nb(793,"tr"),N.Nb(794,"td"),N.mc(795,"delete.deleteButtonContent"),N.Mb(),N.Nb(796,"td"),N.Nb(797,"span",5),N.mc(798,"string"),N.Mb(),N.Mb(),N.Nb(799,"td"),N.mc(800,"'Delete'"),N.Mb(),N.Nb(801,"td"),N.mc(802," Delete row input class "),N.Mb(),N.Mb(),N.Nb(803,"tr"),N.Nb(804,"td"),N.mc(805,"delete.confirmDelete"),N.Mb(),N.Nb(806,"td"),N.Nb(807,"span",5),N.mc(808,"boolean"),N.Mb(),N.Mb(),N.Nb(809,"td"),N.mc(810,"false"),N.Mb(),N.Nb(811,"td"),N.mc(812," Enable/disable "),N.Nb(813,"span",5),N.mc(814,"(confirmDelete)"),N.Mb(),N.mc(815," event. If enabled data will be deleted only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(816,"tr"),N.Nb(817,"td"),N.mc(818,"pager"),N.Mb(),N.Nb(819,"td"),N.Nb(820,"span",5),N.mc(821,"Object"),N.Mb(),N.Mb(),N.Nb(822,"td"),N.mc(823,"n/a"),N.Mb(),N.Nb(824,"td"),N.mc(825," Pager settings "),N.Mb(),N.Mb(),N.Nb(826,"tr"),N.Nb(827,"td"),N.mc(828,"pager.display"),N.Mb(),N.Nb(829,"td"),N.Nb(830,"span",5),N.mc(831,"boolean"),N.Mb(),N.Mb(),N.Nb(832,"td"),N.mc(833,"true"),N.Mb(),N.Nb(834,"td"),N.mc(835," Whether to display the pager or not "),N.Mb(),N.Mb(),N.Nb(836,"tr"),N.Nb(837,"td"),N.mc(838,"pager.perPage"),N.Mb(),N.Nb(839,"td"),N.Nb(840,"span",5),N.mc(841,"number"),N.Mb(),N.Mb(),N.Nb(842,"td"),N.mc(843,"10"),N.Mb(),N.Nb(844,"td"),N.mc(845," Rows per page "),N.Mb(),N.Mb(),N.Nb(846,"tr"),N.Nb(847,"td"),N.mc(848,"rowClassFunction"),N.Mb(),N.Nb(849,"td"),N.Nb(850,"span",5),N.mc(851,"Function"),N.Mb(),N.Mb(),N.Nb(852,"td"),N.mc(853,"row"),N.Mb(),N.Nb(854,"td"),N.mc(855," Handle css class for each row in the table "),N.Mb(),N.Mb(),N.Mb(),N.Nb(856,"h3"),N.Nb(857,"a",11),N.Jb(858,"span",3),N.Mb(),N.mc(859,"Component Outputs/Events"),N.Mb(),N.Nb(860,"table"),N.Nb(861,"tr"),N.Nb(862,"th"),N.mc(863,"Event"),N.Mb(),N.Nb(864,"th"),N.mc(865,"Arguments"),N.Mb(),N.Nb(866,"th"),N.mc(867,"Description"),N.Mb(),N.Mb(),N.Nb(868,"tr"),N.Nb(869,"td"),N.mc(870,"(rowSelect)"),N.Mb(),N.Nb(871,"td"),N.mc(872," event: "),N.Nb(873,"span",5),N.mc(874,"Object"),N.Mb(),N.mc(875,", consist of: "),N.Nb(876,"ul"),N.Nb(877,"li"),N.mc(878,"data: "),N.Nb(879,"span",5),N.mc(880,"Object"),N.Mb(),N.mc(881," - selected row data object"),N.Mb(),N.Nb(882,"li"),N.mc(883,"source: "),N.Nb(884,"span",5),N.mc(885,"DataSource"),N.Mb(),N.mc(886," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(887,"td"),N.mc(888," Triggered once a row is selected (either clicked or selected automatically (after page is changed, after some row is deleted, etc)). "),N.Mb(),N.Mb(),N.Nb(889,"tr"),N.Nb(890,"td"),N.mc(891,"(userRowSelect)"),N.Mb(),N.Nb(892,"td"),N.mc(893," event: "),N.Nb(894,"span",5),N.mc(895,"Object"),N.Mb(),N.mc(896,", consist of: "),N.Nb(897,"ul"),N.Nb(898,"li"),N.mc(899,"data: "),N.Nb(900,"span",5),N.mc(901,"Object"),N.Mb(),N.mc(902," - selected row data object"),N.Mb(),N.Nb(903,"li"),N.mc(904,"source: "),N.Nb(905,"span",5),N.mc(906,"DataSource"),N.Mb(),N.mc(907," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(908,"td"),N.mc(909," Triggered "),N.Nb(910,"strong"),N.mc(911,"only"),N.Mb(),N.mc(912," on a user click event. "),N.Mb(),N.Mb(),N.Nb(913,"tr"),N.Nb(914,"td"),N.mc(915,"(mouseover)"),N.Mb(),N.Nb(916,"td"),N.mc(917," event: "),N.Nb(918,"span",5),N.mc(919,"Object"),N.Mb(),N.mc(920,", consist of: "),N.Nb(921,"ul"),N.Nb(922,"li"),N.mc(923,"data: "),N.Nb(924,"span",5),N.mc(925,"Object"),N.Mb(),N.mc(926," - highlighted row data object"),N.Mb(),N.Nb(927,"li"),N.mc(928,"source: "),N.Nb(929,"span",5),N.mc(930,"DataSource"),N.Mb(),N.mc(931," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(932,"td"),N.mc(933," Triggered "),N.Nb(934,"strong"),N.mc(935,"only"),N.Mb(),N.mc(936," on a user mouseover event. "),N.Mb(),N.Mb(),N.Nb(937,"tr"),N.Nb(938,"td"),N.mc(939,"(create)"),N.Mb(),N.Nb(940,"td"),N.mc(941," event: "),N.Nb(942,"span",5),N.mc(943,"Object"),N.Mb(),N.mc(944,", consist of: "),N.Nb(945,"ul"),N.Nb(946,"li"),N.mc(947,"source: "),N.Nb(948,"span",5),N.mc(949,"DataSource"),N.Mb(),N.mc(950," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(951,"td"),N.mc(952," Triggered once a Create button clicked. Triggered only if table "),N.Nb(953,"strong"),N.mc(954,"mode = external"),N.Mb(),N.mc(955,". "),N.Mb(),N.Mb(),N.Nb(956,"tr"),N.Nb(957,"td"),N.mc(958,"(createConfirm)"),N.Mb(),N.Nb(959,"td"),N.mc(960," event: "),N.Nb(961,"span",5),N.mc(962,"Object"),N.Mb(),N.mc(963,", consist of: "),N.Nb(964,"ul"),N.Nb(965,"li"),N.mc(966,"newData: "),N.Nb(967,"span",5),N.mc(968,"Object"),N.Mb(),N.mc(969," - data entered in a new row"),N.Mb(),N.Nb(970,"li"),N.mc(971,"source: "),N.Nb(972,"span",5),N.mc(973,"DataSource"),N.Mb(),N.mc(974," - table data source"),N.Mb(),N.Nb(975,"li"),N.mc(976,"confirm: "),N.Nb(977,"span",5),N.mc(978,"Deferred"),N.Mb(),N.mc(979," - Deferred object with resolve(newData: Object) and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(980,"td"),N.mc(981," Triggered once a Create button clicked. Triggered only if table "),N.Nb(982,"strong"),N.mc(983,"confirmCreate = true and mode = inline"),N.Mb(),N.mc(984,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Nb(985,"tr"),N.Nb(986,"td"),N.mc(987,"(edit)"),N.Mb(),N.Nb(988,"td"),N.mc(989," event: "),N.Nb(990,"span",5),N.mc(991,"Object"),N.Mb(),N.mc(992,", consist of: "),N.Nb(993,"ul"),N.Nb(994,"li"),N.mc(995,"data: "),N.Nb(996,"span",5),N.mc(997,"Object"),N.Mb(),N.mc(998," - row data object"),N.Mb(),N.Nb(999,"li"),N.mc(1e3,"source: "),N.Nb(1001,"span",5),N.mc(1002,"DataSource"),N.Mb(),N.mc(1003," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1004,"td"),N.mc(1005," Triggered once an Edit button clicked on a row. Triggered only if table "),N.Nb(1006,"strong"),N.mc(1007,"mode = external"),N.Mb(),N.mc(1008,". "),N.Mb(),N.Mb(),N.Nb(1009,"tr"),N.Nb(1010,"td"),N.mc(1011,"(editConfirm)"),N.Mb(),N.Nb(1012,"td"),N.mc(1013," event: "),N.Nb(1014,"span",5),N.mc(1015,"Object"),N.Mb(),N.mc(1016,", consist of: "),N.Nb(1017,"ul"),N.Nb(1018,"li"),N.mc(1019,"data: "),N.Nb(1020,"span",5),N.mc(1021,"Object"),N.Mb(),N.mc(1022," - original row data"),N.Mb(),N.Nb(1023,"li"),N.mc(1024,"newData: "),N.Nb(1025,"span",5),N.mc(1026,"Object"),N.Mb(),N.mc(1027," - edited data"),N.Mb(),N.Nb(1028,"li"),N.mc(1029,"source: "),N.Nb(1030,"span",5),N.mc(1031,"DataSource"),N.Mb(),N.mc(1032," - table data source"),N.Mb(),N.Nb(1033,"li"),N.mc(1034,"confirm: "),N.Nb(1035,"span",5),N.mc(1036,"Deferred"),N.Mb(),N.mc(1037," - Deferred object with resolve(newData: Object) and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(1038,"td"),N.mc(1039," Triggered once a Save button clicked. Triggered only if table "),N.Nb(1040,"strong"),N.mc(1041,"confirmSave = true and mode = inline"),N.Mb(),N.mc(1042,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Nb(1043,"tr"),N.Nb(1044,"td"),N.mc(1045,"(delete)"),N.Mb(),N.Nb(1046,"td"),N.mc(1047," event: "),N.Nb(1048,"span",5),N.mc(1049,"Object"),N.Mb(),N.mc(1050,", consist of: "),N.Nb(1051,"ul"),N.Nb(1052,"li"),N.mc(1053,"data: "),N.Nb(1054,"span",5),N.mc(1055,"Object"),N.Mb(),N.mc(1056," - row data object"),N.Mb();N.Nb(1057,"li"),N.mc(1058,"source: "),N.Nb(1059,"span",5),N.mc(1060,"DataSource"),N.Mb(),N.mc(1061," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1062,"td"),N.mc(1063," Triggered once a Delete button clicked on a row. Triggered only if table "),N.Nb(1064,"strong"),N.mc(1065,"mode = external"),N.Mb(),N.mc(1066,". "),N.Mb(),N.Mb(),N.Nb(1067,"tr"),N.Nb(1068,"td"),N.mc(1069,"(deleteConfirm)"),N.Mb(),N.Nb(1070,"td"),N.mc(1071," event: "),N.Nb(1072,"span",5),N.mc(1073,"Object"),N.Mb(),N.mc(1074,", consist of: "),N.Nb(1075,"ul"),N.Nb(1076,"li"),N.mc(1077,"data: "),N.Nb(1078,"span",5),N.mc(1079,"Object"),N.Mb(),N.mc(1080," - data object to delete"),N.Mb(),N.Nb(1081,"li"),N.mc(1082,"source: "),N.Nb(1083,"span",5),N.mc(1084,"DataSource"),N.Mb(),N.mc(1085," - table data source"),N.Mb(),N.Nb(1086,"li"),N.mc(1087,"confirm: "),N.Nb(1088,"span",5),N.mc(1089,"Deferred"),N.Mb(),N.mc(1090," - Deferred object with resolve() and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(1091,"td"),N.mc(1092," Triggered once a Delete button clicked. Triggered only if table "),N.Nb(1093,"strong"),N.mc(1094,"confirmDelete = true and mode = inline"),N.Mb(),N.mc(1095,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1096,"h3"),N.Nb(1097,"a",12),N.Jb(1098,"span",3),N.Mb(),N.mc(1099,"Data Source Methods"),N.Mb(),N.Nb(1100,"table"),N.Nb(1101,"tr"),N.Nb(1102,"th"),N.mc(1103,"Method"),N.Mb(),N.Nb(1104,"th"),N.mc(1105,"Arguments"),N.Mb(),N.Nb(1106,"th"),N.mc(1107,"Description"),N.Mb(),N.Mb(),N.Nb(1108,"tr"),N.Nb(1109,"td"),N.mc(1110,"load"),N.Mb(),N.Nb(1111,"td"),N.Nb(1112,"ul"),N.Nb(1113,"li"),N.mc(1114,"data: "),N.Nb(1115,"span",5),N.mc(1116,"Array"),N.Mb(),N.mc(1117," - data to load into the table"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1118,"td"),N.mc(1119," Reload table with new data. For example if some data has received from the server. "),N.Mb(),N.Mb(),N.Nb(1120,"tr"),N.Nb(1121,"td"),N.mc(1122,"prepend"),N.Mb(),N.Nb(1123,"td"),N.Nb(1124,"ul"),N.Nb(1125,"li"),N.mc(1126,"element: "),N.Nb(1127,"span",5),N.mc(1128,"Object"),N.Mb(),N.mc(1129," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1130,"td"),N.mc(1131," Add a new element to the beginning of the table. "),N.Mb(),N.Mb(),N.Nb(1132,"tr"),N.Nb(1133,"td"),N.mc(1134,"append"),N.Mb(),N.Nb(1135,"td"),N.Nb(1136,"ul"),N.Nb(1137,"li"),N.mc(1138,"element: "),N.Nb(1139,"span",5),N.mc(1140,"Object"),N.Mb(),N.mc(1141," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1142,"td"),N.mc(1143," Add a new element to the end of the table. This also will switch current page to the last one. "),N.Mb(),N.Mb(),N.Nb(1144,"tr"),N.Nb(1145,"td"),N.mc(1146,"add"),N.Mb(),N.Nb(1147,"td"),N.Nb(1148,"ul"),N.Nb(1149,"li"),N.mc(1150,"element: "),N.Nb(1151,"span",5),N.mc(1152,"Object"),N.Mb(),N.mc(1153," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1154,"td"),N.mc(1155," Add a new element to the table. "),N.Mb(),N.Mb(),N.Nb(1156,"tr"),N.Nb(1157,"td"),N.mc(1158,"remove"),N.Mb(),N.Nb(1159,"td"),N.Nb(1160,"ul"),N.Nb(1161,"li"),N.mc(1162,"element: "),N.Nb(1163,"span",5),N.mc(1164,"Object"),N.Mb(),N.mc(1165," - object to remove"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1166,"td"),N.mc(1167," Remove the element from the table. "),N.Mb(),N.Mb(),N.Nb(1168,"tr"),N.Nb(1169,"td"),N.mc(1170,"update"),N.Mb(),N.Nb(1171,"td"),N.Nb(1172,"ul"),N.Nb(1173,"li"),N.mc(1174,"element: "),N.Nb(1175,"span",5),N.mc(1176,"Object"),N.Mb(),N.mc(1177," - object to update"),N.Mb(),N.Nb(1178,"li"),N.mc(1179,"values: "),N.Nb(1180,"span",5),N.mc(1181,"Object"),N.Mb(),N.mc(1182," - object with new values"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1183,"td"),N.mc(1184," Update the element in the table. "),N.Mb(),N.Mb(),N.Nb(1185,"tr"),N.Nb(1186,"td"),N.mc(1187,"find"),N.Mb(),N.Nb(1188,"td"),N.Nb(1189,"ul"),N.Nb(1190,"li"),N.mc(1191,"element: "),N.Nb(1192,"span",5),N.mc(1193,"Object"),N.Mb(),N.mc(1194," - object to find"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1195,"td"),N.mc(1196," Find the element in the table. "),N.Mb(),N.Mb(),N.Nb(1197,"tr"),N.Nb(1198,"td"),N.mc(1199,"getElements"),N.Mb(),N.Nb(1200,"td"),N.mc(1201," n/a "),N.Mb(),N.Nb(1202,"td"),N.mc(1203," Get elements for current sort, filter and page. "),N.Mb(),N.Mb(),N.Nb(1204,"tr"),N.Nb(1205,"td"),N.mc(1206,"getFilteredAndSorted"),N.Mb(),N.Nb(1207,"td"),N.mc(1208," n/a "),N.Mb(),N.Nb(1209,"td"),N.mc(1210," Get sorted, filtered and not paginated elements. "),N.Mb(),N.Mb(),N.Nb(1211,"tr"),N.Nb(1212,"td"),N.mc(1213,"getAll"),N.Mb(),N.Nb(1214,"td"),N.mc(1215," n/a "),N.Mb(),N.Nb(1216,"td"),N.mc(1217," Get all data source elements. "),N.Mb(),N.Mb(),N.Nb(1218,"tr"),N.Nb(1219,"td"),N.mc(1220,"setSort"),N.Mb(),N.Nb(1221,"td"),N.Nb(1222,"ul"),N.Nb(1223,"li"),N.mc(1224," conf: "),N.Nb(1225,"span",5),N.mc(1226,"Array"),N.Mb(),N.mc(1227," - array of sort setting objects, object format is: "),N.Nb(1228,"ul"),N.Nb(1229,"li"),N.mc(1230,"field - "),N.Nb(1231,"span",5),N.mc(1232,"string"),N.Mb(),N.mc(1233," - columnKey"),N.Mb(),N.Nb(1234,"li"),N.mc(1235,"direction - "),N.Nb(1236,"span",13),N.mc(1237,"string|null"),N.Mb(),N.mc(1238," - 'asc'|'desc'|null - sort direction"),N.Mb(),N.Nb(1239,"li"),N.mc(1240,"compare - "),N.Nb(1241,"span",13),N.mc(1242,"Function|null"),N.Mb(),N.mc(1243," - custom compare function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1244,"li"),N.mc(1245," doEmit: "),N.Nb(1246,"span",5),N.mc(1247,"boolean"),N.Mb(),N.mc(1248," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1249,"td"),N.mc(1250," Set table sorts, example: "),N.Jb(1251,"br"),N.Nb(1252,"code"),N.mc(1253),N.Mb(),N.Mb(),N.Mb(),N.Nb(1254,"tr"),N.Nb(1255,"td"),N.mc(1256,"setFilter"),N.Mb(),N.Nb(1257,"td"),N.Nb(1258,"ul"),N.Nb(1259,"li"),N.mc(1260," conf: "),N.Nb(1261,"span",5),N.mc(1262,"Array"),N.Mb(),N.mc(1263," - array of filter setting objects, object format is: "),N.Nb(1264,"ul"),N.Nb(1265,"li"),N.mc(1266,"field - "),N.Nb(1267,"span",5),N.mc(1268,"string"),N.Mb(),N.mc(1269," - columnKey"),N.Mb(),N.Nb(1270,"li"),N.mc(1271,"search - "),N.Nb(1272,"span",13),N.mc(1273,"string"),N.Mb(),N.mc(1274," - search query"),N.Mb(),N.Nb(1275,"li"),N.mc(1276,"filter - "),N.Nb(1277,"span",13),N.mc(1278,"Function|null"),N.Mb(),N.mc(1279," - custom filter function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1280,"li"),N.mc(1281," andOperator: "),N.Nb(1282,"span",5),N.mc(1283,"boolean"),N.Mb(),N.mc(1284," - how to process multiple filters (as AND or as OR), default = true (AND) "),N.Mb(),N.Nb(1285,"li"),N.mc(1286," doEmit: "),N.Nb(1287,"span",5),N.mc(1288,"boolean"),N.Mb(),N.mc(1289," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1290,"td"),N.mc(1291," Set table filters, example: "),N.Jb(1292,"br"),N.Nb(1293,"code"),N.mc(1294),N.Mb(),N.Mb(),N.Mb(),N.Nb(1295,"tr"),N.Nb(1296,"td"),N.mc(1297,"addFilter"),N.Mb(),N.Nb(1298,"td"),N.Nb(1299,"ul"),N.Nb(1300,"li"),N.mc(1301," conf: "),N.Nb(1302,"span",5),N.mc(1303,"Object"),N.Mb(),N.mc(1304," - one filter object, format is: "),N.Nb(1305,"ul"),N.Nb(1306,"li"),N.mc(1307,"field - "),N.Nb(1308,"span",5),N.mc(1309,"string"),N.Mb(),N.mc(1310," - columnKey"),N.Mb(),N.Nb(1311,"li"),N.mc(1312,"search - "),N.Nb(1313,"span",13),N.mc(1314,"string"),N.Mb(),N.mc(1315," - search query"),N.Mb(),N.Nb(1316,"li"),N.mc(1317,"filter - "),N.Nb(1318,"span",13),N.mc(1319,"Function|null"),N.Mb(),N.mc(1320," - custom filter function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1321,"li"),N.mc(1322," andOperator: "),N.Nb(1323,"span",5),N.mc(1324,"boolean"),N.Mb(),N.mc(1325," - how to process multiple filters (as AND or as OR), default = true (AND) "),N.Mb(),N.Nb(1326,"li"),N.mc(1327," doEmit: "),N.Nb(1328,"span",5),N.mc(1329,"boolean"),N.Mb(),N.mc(1330," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1331,"td"),N.mc(1332," Set table filter for one column, example: "),N.Jb(1333,"br"),N.Nb(1334,"code"),N.mc(1335),N.Mb(),N.Mb(),N.Mb(),N.Nb(1336,"tr"),N.Nb(1337,"td"),N.mc(1338,"setPaging"),N.Mb(),N.Nb(1339,"td"),N.Nb(1340,"ul"),N.Nb(1341,"li"),N.mc(1342," page: "),N.Nb(1343,"span",5),N.mc(1344,"number"),N.Mb(),N.mc(1345," - page number "),N.Mb(),N.Nb(1346,"li"),N.mc(1347," perPage: "),N.Nb(1348,"span",5),N.mc(1349,"number"),N.Mb(),N.mc(1350," - about per page "),N.Mb(),N.Nb(1351,"li"),N.mc(1352," doEmit: "),N.Nb(1353,"span",5),N.mc(1354,"boolean"),N.Mb(),N.mc(1355," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1356,"td"),N.mc(1357," Set table pagination settings "),N.Mb(),N.Mb(),N.Nb(1358,"tr"),N.Nb(1359,"td"),N.mc(1360,"setPage"),N.Mb(),N.Nb(1361,"td"),N.Nb(1362,"ul"),N.Nb(1363,"li"),N.mc(1364," page: "),N.Nb(1365,"span",5),N.mc(1366,"number"),N.Mb(),N.mc(1367," - page number "),N.Mb(),N.Nb(1368,"li"),N.mc(1369," doEmit: "),N.Nb(1370,"span",5),N.mc(1371,"boolean"),N.Mb(),N.mc(1372," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1373,"td"),N.mc(1374," Set table page "),N.Mb(),N.Mb(),N.Nb(1375,"tr"),N.Nb(1376,"td"),N.mc(1377,"reset"),N.Mb(),N.Nb(1378,"td"),N.Nb(1379,"ul"),N.Nb(1380,"li"),N.mc(1381,"silent: "),N.Nb(1382,"span",5),N.mc(1383,"boolean"),N.Mb(),N.mc(1384," - if true - you have to additionally call `refresh` to reflect the changes"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1385,"td"),N.mc(1386," Set data source to first page with empty filter and empty sort. "),N.Mb(),N.Mb(),N.Nb(1387,"tr"),N.Nb(1388,"td"),N.mc(1389,"refresh"),N.Mb(),N.Nb(1390,"td"),N.mc(1391," n/a "),N.Mb(),N.Nb(1392,"td"),N.mc(1393," Refresh data in the data source. In most cases you won't need this method. "),N.Mb(),N.Mb(),N.Nb(1394,"tr"),N.Nb(1395,"td"),N.mc(1396,"count"),N.Mb(),N.Nb(1397,"td"),N.mc(1398," n/a "),N.Mb(),N.Nb(1399,"td"),N.mc(1400," Return count of element in the data source. "),N.Mb(),N.Mb(),N.Nb(1401,"tr"),N.Nb(1402,"td"),N.mc(1403,"empty"),N.Mb(),N.Nb(1404,"td"),N.mc(1405," n/a "),N.Mb(),N.Nb(1406,"td"),N.mc(1407," Empty the data source. "),N.Mb(),N.Mb(),N.Mb(),N.Mb()}2&b&&(N.xb(71),N.oc(" columns: ","{"," "),N.xb(3),N.qc(": ","{"," title: 'Some Title' ","}"," ","}"," "),N.xb(231),N.pc("","{"," value: 'Element Value', title: 'Element Title' ","}",""),N.xb(38),N.pc("","{"," id: 10, name: 'Nick', email: 'rey@karina.biz' ","}",""),N.xb(910),N.pc("this.source.setSort([","{"," field: 'id', direction: 'asc' ","}","]);"),N.xb(41),N.rc("this.source.setFilter([","{"," field: 'id', search: 'foobar' ","}",", ","{"," field: 'name', search: 'foobar' ","}","]);"),N.xb(41),N.pc("this.source.addFilter(","{"," field: 'id', search: 'foobar' ","}",");"))},directives:[M.a],styles:[".nested-obj[_ngcontent-%COMP%]{color:#bdbdbd}"]}),n)}],s=((m=function t(){b(this,t)}).\u0275mod=N.Gb({type:m}),m.\u0275inj=N.Fb({factory:function(b){return new(b||m)},imports:[[a.b,o.c.forChild(r),d.a]]}),m)}}])}();