import { WrenchIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "~/components/ui/tooltip";

type ToolIconProps = {
    name: string;
    category?: string;
    icon?: string;
    className?: string;
    disableTooltip?: boolean;
};

export function ToolIcon(props: ToolIconProps) {
    const { name, category, icon, className, disableTooltip } = props;

    const content = icon ? (
        <img
            alt={name}
            src={icon}
            className={cn("w-6 h-6", className, {
                // icons served from /admin/assets are colored, so we should not invert them.
                "dark:invert": !icon.startsWith("/admin/assets"),
            })}
        />
    ) : (
        <WrenchIcon className={cn("w-4 h-4 mr-2", className)} />
    );

    if (disableTooltip) {
        return content;
    }

    return (
        <Tooltip delayDuration={200}>
            <TooltipTrigger>{content}</TooltipTrigger>

            <TooltipContent>
                {[category, name].filter((x) => !!x).join(" - ")}
            </TooltipContent>
        </Tooltip>
    );
}
