import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,

  // Add two new props to the function declaration of this component: [onShowAllEntries] and [onShowFavoriteEntries]
  onShowAllEntries,
  onShowFavoriteEntries,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        {/* Pass [onShowAllEntries] to onClick */}
        <Tab active onClick={onShowAllEntries}>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        {/* Pass [onShowFavoriteEntries] to onClick */}
        <Tab onClick={onShowFavoriteEntries}>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
