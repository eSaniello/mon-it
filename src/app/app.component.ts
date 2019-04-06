import {
    Component,
    OnInit
} from "@angular/core";
import {
    isAndroid
} from "tns-core-modules/platform";
import {
    SelectedIndexChangedEventData
} from "tns-core-modules/ui/tab-view/tab-view";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    private tabSelectedIndex: number;

    constructor(){ }

    ngOnInit(): void {
        this.tabSelectedIndex = 0;
    }

    setTab1IconSource(icon: string): string {
        const iconPrefix: string = isAndroid ? "res://" : "res://tabIcons/";
        let activeOrDisabled: string;

        if (this.tabSelectedIndex === 0 && icon === "airplane")
            activeOrDisabled = "_active";
        else
            activeOrDisabled = "_disabled";


        return iconPrefix + icon + activeOrDisabled;
    }

    setTab2IconSource(icon: string): string {
        const iconPrefix: string = isAndroid ? "res://" : "res://tabIcons/";
        let activeOrDisabled: string;

        if (this.tabSelectedIndex === 1 && icon === "control")
            activeOrDisabled = "_active";
        else
            activeOrDisabled = "_disabled";


        return iconPrefix + icon + activeOrDisabled;
    }

    setTab3IconSource(icon: string): string {
        const iconPrefix: string = isAndroid ? "res://" : "res://tabIcons/";
        let activeOrDisabled: string;

        if (this.tabSelectedIndex === 2 && icon === "map")
            activeOrDisabled = "_active";
        else
            activeOrDisabled = "_disabled";


        return iconPrefix + icon + activeOrDisabled;
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.newIndex === 0)
            this.tabSelectedIndex = 0;
        else if (args.newIndex === 1)
            this.tabSelectedIndex = 1;
        else
            this.tabSelectedIndex = 2;

        // console.log(`TabSelectedIndex: ${this.tabSelectedIndex}`);
    }
}
