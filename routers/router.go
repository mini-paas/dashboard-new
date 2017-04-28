package routers

import (
	"dashboard/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/apps", &controllers.MainController{}, "*:Index")
	beego.Router("/apps1", &controllers.MainController{}, "*:Index1")
}
