import React from "react";
import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";

export default function EntriesSection({ entries, onToggleFavorite }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <div key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry entry={entry} onToggleFavorite={onToggleFavorite} />
          </div>
        ))}
      </div>
    </section>
  );
}
