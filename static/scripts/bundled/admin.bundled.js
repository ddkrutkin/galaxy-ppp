webpackJsonp([2],{100:function(e,t,a){"use strict";(function(e,s){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),r=i(n),o=a(6),l=i(o),d=e.View.extend({initialize:function(t){this.model=new e.Model(t),this.url=this.model.get("url"),this.redirect=this.model.get("redirect"),this.setElement("<div/>"),this.render()},render:function(){var e=this;s.ajax({url:Galaxy.root+this.url,type:"GET"}).done(function(t){var a=s.extend({},e.model.attributes,t),i=new r.default({title:a.title,message:a.message,status:a.status||"warning",icon:a.icon,initial_errors:!0,errors:a.errors,inputs:a.inputs,buttons:{submit:new l.default.Button({tooltip:a.submit_tooltip,title:a.submit_title||"Save",icon:a.submit_icon||"fa-save",cls:"btn btn-primary ui-clear-float",onclick:function(){e._submit(i)}})}});e.$el.empty().append(i.$el)}).fail(function(t){e.$el.empty().append(new l.default.Message({message:"Failed to load resource "+e.url+".",status:"danger",persistent:!0}).$el)})},_submit:function(e){var t=this;s.ajax({url:Galaxy.root+t.url,data:JSON.stringify(e.data.create()),type:"PUT",contentType:"application/json"}).done(function(a){var i={};a.id?i.id=a.id:i={message:a.message,status:"success",persistent:!1},t.redirect?window.location=Galaxy.root+t.redirect+"?"+s.param(i):(e.data.matchModel(a,function(t,a){e.field_list[a].value(t.value)}),t._showMessage(e,success_message))}).fail(function(a){t._showMessage(e,{message:a.responseJSON.err_msg,status:"danger",persistent:!1})})},_showMessage:function(e,t){e.$el.parents().filter(function(){return-1!=["auto","scroll"].indexOf(s(this).css("overflow"))}).first().animate({scrollTop:0},500),e.message.update(t)}});t.default={View:d}}).call(t,a(2),a(0))},279:function(e,t,a){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var s=a(3),i=t(s),n=a(0),r=t(n),o=a(64),l=t(o),d=a(280),u=t(d),c=a(100),_=t(c),f=a(25),m=t(f),g=a(26),p=t(g),h=a(89),v=t(h),y=a(5),b=t(y),w=a(43),x=t(w),M=a(281),$=t(M),G=a(286),C=t(G),q=a(63),P=t(q),j=r.default;window.app=function(t,a){window.Galaxy=new l.default.GalaxyApp(t,a),Galaxy.debug("admin app");var s=v.default.extend({routes:{"(/)admin(/)users":"show_users","(/)admin(/)roles":"show_roles","(/)admin(/)groups":"show_groups","(/)admin(/)tool_versions":"show_tool_versions","(/)admin(/)quotas":"show_quotas","(/)admin(/)repositories":"show_repositories","(/)admin(/)forms":"show_forms","(/)admin(/)form(/)(:form_id)":"show_form","(/)admin/api_keys":"show_user_api_keys","(/)admin/data_tables":"show_data_tables"},authenticate:function(){return Galaxy.user&&Galaxy.user.id&&Galaxy.user.get("is_admin")},show_users:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin/users_list",url_data:Galaxy.params}))},show_roles:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin/roles_list",url_data:Galaxy.params}))},show_groups:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin/groups_list",url_data:Galaxy.params}))},show_repositories:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin_toolshed/browse_repositories",url_data:Galaxy.params}))},show_tool_versions:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin/tool_versions_list",url_data:Galaxy.params}))},show_quotas:function(){this.page.display(new m.default({url_base:Galaxy.root+"admin/quotas_list",url_data:Galaxy.params}))},show_user_api_keys:function(){var e=document.createElement("div");this.page.display(e),new P.default($.default).$mount(e)},show_data_tables:function(){var e=document.createElement("div");this.page.display(e),new P.default(C.default).$mount(e)},show_forms:function(){this.page.display(new m.default({url_base:Galaxy.root+"forms/forms_list",url_data:Galaxy.params}))},show_form:function(e){var t="?id="+p.default.get("id"),a={reset_user_password:{title:(0,i.default)("Reset passwords"),url:"admin/reset_user_password"+t,icon:"fa-user",submit_title:"Save new password",redirect:"admin/users"},manage_roles_and_groups_for_user:{url:"admin/manage_roles_and_groups_for_user"+t,icon:"fa-users",redirect:"admin/users"},manage_users_and_groups_for_role:{url:"admin/manage_users_and_groups_for_role"+t,redirect:"admin/roles"},manage_users_and_roles_for_group:{url:"admin/manage_users_and_roles_for_group"+t,redirect:"admin/groups"},manage_users_and_groups_for_quota:{url:"admin/manage_users_and_groups_for_quota"+t,redirect:"admin/quotas"},create_role:{url:"admin/create_role",redirect:"admin/roles"},create_group:{url:"admin/create_group",redirect:"admin/groups"},create_quota:{url:"admin/create_quota",redirect:"admin/quotas"},rename_role:{url:"admin/rename_role"+t,redirect:"admin/roles"},rename_group:{url:"admin/rename_group"+t,redirect:"admin/groups"},rename_quota:{url:"admin/rename_quota"+t,redirect:"admin/quotas"},edit_quota:{url:"admin/edit_quota"+t,redirect:"admin/quotas"},set_quota_default:{url:"admin/set_quota_default"+t,redirect:"admin/quotas"},create_form:{url:"forms/create_form",redirect:"admin/forms"},edit_form:{url:"forms/edit_form"+t,redirect:"admin/forms"}};this.page.display(new _.default.View(a[e]))}});j(function(){e.extend(t.config,{active_view:"admin"}),b.default.setWindowTitle("Administration"),Galaxy.page=new x.default.View(e.extend(t,{Left:u.default,Router:s}))})}}).call(t,a(1))},280:function(e,t,a){"use strict";(function(e,s,i){Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=function(e){return e&&e.__esModule?e:{default:e}}(n),o=e.View.extend({initialize:function(t,a){var s=this;this.page=t,this.root=a.root,this.config=a.config,this.settings=a.settings,this.message=a.message,this.status=a.status,this.model=new e.Model({title:(0,r.default)("Administration")}),this.categories=new e.Collection([{title:(0,r.default)("Server"),items:[{title:(0,r.default)("Data types"),url:"admin/view_datatypes_registry"},{title:(0,r.default)("Data tables"),url:"admin/data_tables",target:"__use_router__"},{title:(0,r.default)("Display applications"),url:"admin/display_applications"},{title:(0,r.default)("Manage jobs"),url:"admin/jobs"},{title:(0,r.default)("Local data"),url:"data_manager"}]},{title:(0,r.default)("User Management"),items:[{title:(0,r.default)("Users"),url:"admin/users",target:"__use_router__"},{title:(0,r.default)("Quotas"),url:"admin/quotas",target:"__use_router__",enabled:s.config.enable_quotas},{title:(0,r.default)("Groups"),url:"admin/groups",target:"__use_router__"},{title:(0,r.default)("Roles"),url:"admin/roles",target:"__use_router__"},{title:(0,r.default)("Forms"),url:"admin/forms",target:"__use_router__"},{title:(0,r.default)("API keys"),url:"admin/api_keys",target:"__use_router__"},{title:(0,r.default)("Impersonate a user"),url:"admin/impersonate",enabled:s.config.allow_user_impersonation}]},{title:(0,r.default)("Tool Management"),items:[{title:(0,r.default)("Install new tools"),url:"admin_toolshed/browse_tool_sheds",enabled:s.settings.is_tool_shed_installed},{title:"Install new tools (Beta)",url:"admin_toolshed/browse_toolsheds",enabled:s.settings.is_tool_shed_installed&&s.config.enable_beta_ts_api_install},{title:(0,r.default)("Monitor installation"),url:"admin_toolshed/monitor_repository_installation",enabled:s.settings.installing_repository_ids},{title:(0,r.default)("Manage tools"),url:"admin/repositories",enabled:s.settings.is_repo_installed,target:"__use_router__"},{title:(0,r.default)("Manage metadata"),url:"admin_toolshed/reset_metadata_on_selected_installed_repositories",enabled:s.settings.is_repo_installed},{title:(0,r.default)("Manage whitelist"),url:"admin/sanitize_whitelist"},{title:(0,r.default)("Manage dependencies"),url:"admin/manage_tool_dependencies"},{title:(0,r.default)("View lineage"),url:"admin/tool_versions",target:"__use_router__"},{title:(0,r.default)("View migration stages"),url:"admin/review_tool_migration_stages"},{title:(0,r.default)("View error logs"),url:"admin/tool_errors"}]}]),this.setElement(this._template())},render:function(){var e=this;this.$el.empty(),this.categories.each(function(t){var a=s(e._templateSection(t.attributes)),n=a.find(".ui-side-section-body");i.each(t.get("items"),function(t){if(void 0===t.enabled||t.enabled){var a=s("<a/>").attr({href:e.root+t.url}).text((0,r.default)(t.title));"__use_router__"==t.target?a.on("click",function(a){a.preventDefault(),e.page.router.push(t.url)}):a.attr("target","galaxy_main"),n.append(s("<div/>").addClass("ui-side-section-body-title").append(a))}}),e.$el.append(a)}),this.page.$("#galaxy_main").prop("src",this.root+"admin/center?message="+this.message+"&status="+this.status)},_templateSection:function(e){return["<div>",'<div class="ui-side-section-title">'+(0,r.default)(e.title)+"</div>",'<div class="ui-side-section-body"/>',"</div>"].join("")},_template:function(){return'<div class="ui-side-panel"/>'},toString:function(){return"adminPanel"}});t.default=o}).call(t,a(2),a(0),a(1))},281:function(e,t,a){"use strict";function s(e){a(282)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(284),n=a.n(i),r=a(285),o=a(19),l=s,d=o(n.a,r.a,!1,l,null,null);t.default=d.exports},282:function(e,t,a){var s=a(283);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(83)("a20ed194",s,!0)},283:function(e,t,a){t=e.exports=a(82)(void 0),t.push([e.i,"",""])},284:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(84),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{users:[],errors:[]}},created:function(){var e=this;i.default.get(Galaxy.root+"userskeys/all_users").then(function(t){e.users=t.data}).catch(function(t){e.errors.push(t)})},methods:{generateKey:function(e){var t=this;i.default.get(Galaxy.root+"userskeys/admin_api_keys",{params:{uid:e}}).then(function(e){t.users=e.data}).catch(function(e){t.errors.push(e)})}}}},285:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toolForm",attrs:{id:"form-userkeys"}},[a("div",{staticClass:"toolFormTitle"},[e._v("User Information")]),e._v(" "),e.users&&e.users.length>0?a("div",[a("table",{staticClass:"grid"},[e._m(0,!1,!1),e._v(" "),a("tbody",e._l(e.users,function(t){return a("tr",[a("td",[e._v("\n                        "+e._s(t.uid)+"\n                    ")]),e._v(" "),a("td",[e._v("\n                        "+e._s(t.email)+"\n                    ")]),e._v(" "),a("td",[e._v("\n                        "+e._s(t.key)+"\n                    ")]),e._v(" "),a("td",[a("input",{attrs:{type:"button",value:"Generate a new key now"},on:{click:function(a){e.generateKey(t.uid)}}})])])}))])]):a("div",[a("div",[e._v("No user information available")])]),e._v(" "),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("th",[e._v("Encoded UID")]),a("th",[e._v("Email")]),a("th",[e._v("API Key")]),a("th",[e._v("Actions")])])}],n={render:s,staticRenderFns:i};t.a=n},286:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(287),i=a.n(s),n=a(300),r=a(19),o=r(i.a,n.a,!1,null,null,null);t.default=o.exports},287:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(84),n=s(i),r=a(288),o=s(r),l=a(291),d=s(l),u=a(297),c=s(u);t.default={data:function(){return{currentView:"data-tables-grid",isLoaded:!1,dataTables:[],dataManagerTableName:"",dataManagerColumns:[],dataManagerItems:[],message:"",status:""}},components:{message:o.default,"data-tables-grid":d.default,"data-manager-grid":c.default},computed:{currentProps:function(){return"data-tables-grid"===this.currentView?{isLoaded:this.isLoaded,rows:this.dataTables}:{dataManagerTableName:this.dataManagerTableName,dataManagerColumns:this.dataManagerColumns,dataManagerItems:this.dataManagerItems}}},methods:{showDataManager:function(e){var t=this;n.default.get(Galaxy.root+"data_manager/tool_data_table_items",{params:{table_name:e}}).then(function(a){t.message=a.data.message,t.status=a.data.status,"error"!==a.data.status&&"warning"!==a.data.status&&(t.dataManagerTableName=e,t.dataManagerColumns=a.data.data.columns,t.dataManagerItems=a.data.data.items,t.currentView="data-manager-grid")}).catch(function(e){console.error(e)})},reloadDataManager:function(e){var t=this;n.default.get(Galaxy.root+"data_manager/reload_tool_data_table",{params:{table_name:e}}).then(function(e){t.message=e.data.message,t.status=e.data.status,"error"!==e.data.status&&"warning"!==e.data.status&&(t.dataManagerItems=e.data.data.items)}).catch(function(e){console.error(e)})}},created:function(){var e=this;n.default.get(Galaxy.root+"admin/data_tables_list").then(function(t){e.isLoaded=!0,e.dataTables=t.data.data,e.message=t.data.message,e.status=t.data.status}).catch(function(e){console.error(e)})}}},288:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(289),i=a.n(s),n=a(290),r=a(19),o=r(i.a,n.a,!1,null,null,null);t.default=o.exports},289:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Message",props:{message:{type:String,required:!0},status:{type:String,default:"done"}}}},290:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.message?a("div",{class:[e.status+"message"]},[e._v(e._s(e.message))]):e._e()},i=[],n={render:s,staticRenderFns:i};t.a=n},291:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(292),i=a.n(s),n=a(296),r=a(19),o=r(i.a,n.a,!1,null,null,null);t.default=o.exports},292:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(293),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={props:{isLoaded:{type:Boolean,required:!0},rows:{type:Array,required:!0}},data:function(){return{columns:[{text:"Name",dataIndex:"name"},{text:"Filename",dataIndex:"filename"},{text:"Tool data path",dataIndex:"tool_data_path"},{text:"Errors",dataIndex:"errors"}]}},components:{"base-grid":i.default},methods:{handleTableNameClick:function(e){this.$emit("changeview",e.target.text)}}}},293:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(294),i=a.n(s),n=a(295),r=a(19),o=r(i.a,n.a,!1,null,null,null);t.default=o.exports},294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{isLoaded:{type:Boolean},title:{type:String},columns:{type:Array},rows:{type:Array}}}},295:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toolForm"},[a("div",{staticClass:"toolFormTitle"},[e._t("title",[e._v(e._s(e.title))])],2),e._v(" "),a("div",{staticClass:"toolFormBody"},[a("table",{staticClass:"manage-table colored",attrs:{border:"0",cellspacing:"0",cellpadding:"0",width:"100%"}},[e._t("columns",e._l(e.columns,function(t){return a("th",{attrs:{bgcolor:"#D8D8D8"}},[e._v(e._s(t.text))])})),e._v(" "),e._t("rows",[e._l(e.rows,function(t,s){return[a("tr",{class:[s%2==0?"tr":"odd_row"]},e._l(e.columns,function(s){return a("td",[e._v(e._s(t[s.dataIndex]))])}))]})])],2),e._v(" "),void 0===e.isLoaded||e.isLoaded?e._e():a("div",{style:{textAlign:"center",padding:"7px 0"}},[e._v("\n      Loading...\n    ")])])])},i=[],n={render:s,staticRenderFns:i};t.a=n},296:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-grid",{attrs:{"is-loaded":e.isLoaded,columns:e.columns}},[a("template",{slot:"title"},[e._v("\n    Current data table registry contains "+e._s(e.rows.length)+" data tables\n  ")]),e._v(" "),e._l(e.rows,function(t,s){return a("template",{slot:"rows"},[a("tr",{class:[s%2==0?"tr":"odd_row"]},[a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:e.handleTableNameClick}},[e._v(e._s(t.name))])]),e._v(" "),a("td",[e._v(e._s(t.filename))]),e._v(" "),a("td",[e._v(e._s(t.tool_data_path))]),e._v(" "),a("td",[e._v(e._s(t.errors))])])])})],2)},i=[],n={render:s,staticRenderFns:i};t.a=n},297:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(298),i=a.n(s),n=a(299),r=a(19),o=r(i.a,n.a,!1,null,null,null);t.default=o.exports},298:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{dataManagerTableName:{type:String,required:!0},dataManagerColumns:{type:Array,required:!0},dataManagerItems:{type:Array,required:!0}},methods:{handleReloadButtonClick:function(e){this.$emit("reloaddatamanager",this.dataManagerTableName)}}}},299:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"tabletip"},[a("thead",[a("tr",[a("th",{staticStyle:{"font-size":"120%"},attrs:{colspan:e.dataManagerColumns.length}},[e._v("\n        Data Manager: "+e._s(e.dataManagerTableName)+"\n        "),a("a",{staticClass:"icon-btn",attrs:{href:"javascript:void(0)",title:"Reload "+e.dataManagerTableName+" tool data table"},on:{click:e.handleReloadButtonClick}},[a("span",{staticClass:"fa fa-refresh"})])])]),e._v(" "),a("tr",e._l(e.dataManagerColumns,function(t){return a("th",[e._v(e._s(t))])}))]),e._v(" "),e._l(e.dataManagerItems,function(t){return a("tbody",[a("tr",e._l(e.dataManagerColumns,function(s){return a("td",[e._v(e._s(t[s]))])}))])})],2)},i=[],n={render:s,staticRenderFns:i};t.a=n},300:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("message",{attrs:{message:e.message,status:e.status}}),e._v(" "),"error"!==e.status?a(e.currentView,e._b({tag:"component",on:{changeview:e.showDataManager,reloaddatamanager:e.reloadDataManager}},"component",e.currentProps,!1)):e._e()],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},43:function(e,t,a){"use strict";(function(e,s,i){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(67),o=n(r),l=a(42),d=n(l),u=a(9),c=n(u),_=a(5),f=n(_),m=e.View.extend({el:"body",className:"full-content",_panelids:["left","right"],initialize:function(t){var a=this;this.config=s.defaults(t.config||{},{message_box_visible:!1,message_box_content:"",message_box_class:"info",show_inactivity_warning:!1,inactivity_box_content:""}),Galaxy.modal=this.modal=new c.default.View,Galaxy.display=this.display=function(e){e.title?(f.default.setWindowTitle(e.title),e.allow_title_display=!1):(f.default.setWindowTitle(),e.allow_title_display=!0),a.center.display(e)},Galaxy.router=this.router=t.Router&&new t.Router(a,t),this.masthead=new o.default.View(this.config),this.center=new d.default.CenterPanel,this.$el.attr("scroll","no"),this.$el.html(this._template()),this.$("#masthead").replaceWith(this.masthead.$el),this.$("#center").append(this.center.$el),this.$el.append(this.masthead.frame.$el),this.$el.append(this.modal.$el),this.$messagebox=this.$("#messagebox"),this.$inactivebox=this.$("#inactivebox"),this.panels={},s.each(this._panelids,function(e){var s=e.charAt(0).toUpperCase()+e.slice(1),i=t[s];if(i){var n=new i(a,t);a[n.toString()]=n,a.panels[e]=new d.default.SidePanel({id:e,el:a.$("#"+e),view:n})}}),this.render(),this.router&&e.history.start({root:Galaxy.root,pushState:!0})},render:function(){return i(".select2-hidden-accessible").remove(),this.masthead.render(),this.renderMessageBox(),this.renderInactivityBox(),this.renderPanels(),this._checkCommunicationServerOnline(),this},renderMessageBox:function(){if(this.config.message_box_visible){var e=this.config.message_box_content||"",t=this.config.message_box_class||"info";this.$el.addClass("has-message-box"),this.$messagebox.attr("class","panel-"+t+"-message").html(e).toggle(!!e).show()}else this.$el.removeClass("has-message-box"),this.$messagebox.hide();return this},renderInactivityBox:function(){if(this.config.show_inactivity_warning){var e=this.config.inactivity_box_content||"",t=i("<a/>").attr("href",Galaxy.root+"user/resend_verification").text("Resend verification");this.$el.addClass("has-inactivity-box"),this.$inactivebox.html(e+" ").append(t).toggle(!!e).show()}else this.$el.removeClass("has-inactivity-box"),this.$inactivebox.hide();return this},renderPanels:function(){var e=this;return s.each(this._panelids,function(t){var a=e.panels[t];a?a.render():(e.$("#center").css(t,0),e.$("#"+t).hide())}),this},_template:function(){return['<div id="everything">','<div id="background"/>','<div id="masthead"/>','<div id="messagebox"/>','<div id="inactivebox" class="panel-warning-message" />','<div id="left" />','<div id="center" />','<div id="right" />',"</div>",'<div id="dd-helper" />'].join("")},toString:function(){return"PageLayoutView"},_checkCommunicationServerOnline:function(){var e=window.Galaxy.config.communication_server_host,t=window.Galaxy.config.communication_server_port,a=window.Galaxy.user.attributes.preferences,s=i("#show-chat-online");a&&-1!=["1","true"].indexOf(a.communication_server)?i.ajax({url:e+":"+t}).success(function(e){null!==window.Galaxy.user.id&&"hidden"===s.css("visibility")&&s.css("visibility","visible")}).error(function(e){s.css("visibility","hidden")}):s.css("visibility","hidden")}});t.default={View:m}}).call(t,a(2),a(1),a(0))},89:function(e,t,a){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),n=s(i),r=a(26),o=s(r),l=a(6),d=s(l),u=n.default,c=e.Router.extend({initialize:function(e,t){this.page=e,this.options=t},push:function(e,t){t=t||{},t.__identifer=Math.random().toString(36).substr(2),e+=-1==e.indexOf("?")?"?":"&",e+=u.param(t,!0),Galaxy.params=t,this.navigate(e,{trigger:!0})},execute:function(e,t,a){Galaxy.debug("router execute:",e,t,a);var s=o.default.parse(t.pop());t.push(s),e&&(this.authenticate(t,a)?e.apply(this,t):this.access_denied())},authenticate:function(e,t){return!0},access_denied:function(){this.page.display(new d.default.Message({status:"danger",message:"You must be logged in with proper credentials to make this request.",persistent:!0}))}});t.default=c}).call(t,a(2))}},[279]);